// services/paymentService.js
import { db } from '../firebase';
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';

// Initialize Razorpay
const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Create a payment request for a charging session
export const createPaymentRequest = async (sessionId, amount) => {
  try {
    // First get the session details
    const sessionDoc = await getDocs(
      query(collection(db, "chargingSessions"), where("id", "==", sessionId))
    );
    
    if (sessionDoc.empty) {
      throw new Error("Charging session not found");
    }
    
    const sessionData = sessionDoc.docs[0].data();
    
    // Create a payment request in Firestore
    const paymentRef = await addDoc(collection(db, "payments"), {
      sessionId,
      vehicleNumber: sessionData.vehicleNumber,
      amount,
      status: "created",
      createdAt: new Date(),
      paidAt: null
    });
    
    return {
      success: true,
      paymentId: paymentRef.id
    };
  } catch (error) {
    console.error("Error creating payment request:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Process payment with Razorpay
export const processPayment = async (paymentId, customerName, email) => {
  try {
    // Get payment details
    const paymentDoc = await getDocs(
      query(collection(db, "payments"), where("id", "==", paymentId))
    );
    
    if (paymentDoc.empty) {
      throw new Error("Payment not found");
    }
    
    const paymentData = paymentDoc.docs[0].data();
    
    // Initialize Razorpay
    const res = await initializeRazorpay();
    
    if (!res) {
      throw new Error("Razorpay failed to load");
    }
    
    // Create Razorpay order (this would normally be done on your backend)
    // For demo purposes, we're doing it here
    const orderData = {
      amount: paymentData.amount * 100, // Razorpay uses paise
      currency: "INR",
      receipt: paymentId,
      payment_capture: 1
    };
    
    // In a real app, you would make a server call here to create the order
    // For demo, we'll assume the order is created and has this ID
    const orderId = "order_" + Math.random().toString(36).substring(2, 15);
    
    // Razorpay options
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your key
      amount: orderData.amount,
      currency: orderData.currency,
      name: "EV Charging Station",
      description: "Payment for charging session",
      order_id: orderId,
      handler: async function (response) {
        // Handle successful payment
        await updateDoc(doc(db, "payments", paymentId), {
          status: "paid",
          paidAt: new Date(),
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature
        });
        
        // Also update the charging session
        await updateDoc(doc(db, "chargingSessions", paymentData.sessionId), {
          paymentStatus: "paid"
        });
        
        alert("Payment successful!");
        window.location.href = "/user/dashboard";
      },
      prefill: {
        name: customerName,
        email: email,
        contact: ""
      },
      theme: {
        color: "#3399cc"
      }
    };
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    
    return { success: true };
  } catch (error) {
    console.error("Error processing payment:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Get pending payments for a vehicle
export const getPendingPayments = async (vehicleNumber) => {
  try {
    const sessionsQuery = query(
      collection(db, "chargingSessions"),
      where("vehicleNumber", "==", vehicleNumber),
      where("paymentStatus", "in", ["pending", null])
    );
    
    const sessionsSnapshot = await getDocs(sessionsQuery);
    
    const pendingPayments = [];
    
    sessionsSnapshot.forEach(doc => {
      pendingPayments.push({
        id: doc.id,
        ...doc.data(),
        entryTime: doc.data().entryTime.toDate(),
        exitTime: doc.data().exitTime ? doc.data().exitTime.toDate() : null
      });
    });
    
    return {
      success: true,
      payments: pendingPayments
    };
  } catch (error) {
    console.error("Error getting pending payments:", error);
    return {
      success: false,
      error: error.message
    };
  }
};
