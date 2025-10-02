import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  updateDoc, 
  Timestamp 
} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

// Register a new vehicle
export const registerVehicle = async (vehicleData, password) => {
  try {
    // Check if vehicle already exists
    const vehicleQuery = query(
      collection(db, "vehicles"),
      where("vehicleNumber", "==", vehicleData.vehicleNumber)
    );
    
    const vehicleSnapshot = await getDocs(vehicleQuery);
    
    if (!vehicleSnapshot.empty) {
      throw new Error("Vehicle with this number is already registered");
    }
    
    // Create user account for vehicle owner
    const email = `${vehicleData.vehicleNumber.replace(/\s+/g, '')}@evcharging.com`;
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Add vehicle to Firestore
    const vehicleRef = await addDoc(collection(db, "vehicles"), {
      vehicleNumber: vehicleData.vehicleNumber,
      ownerName: vehicleData.ownerName,
      ownerPhone: vehicleData.ownerPhone,
      vehicleType: vehicleData.vehicleType,
      registeredAt: Timestamp.now()
    });
    
    // Add user to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: email,
      vehicleNumber: vehicleData.vehicleNumber,
      name: vehicleData.ownerName,
      phone: vehicleData.ownerPhone,
      createdAt: Timestamp.now()
    });
    
    return {
      success: true,
      vehicleId: vehicleRef.id,
      userId: user.uid
    };
  } catch (error) {
    console.error("Error registering vehicle:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Get vehicle details
export const getVehicleDetails = async (vehicleNumber) => {
  try {
    const vehicleQuery = query(
      collection(db, "vehicles"),
      where("vehicleNumber", "==", vehicleNumber)
    );
    
    const vehicleSnapshot = await getDocs(vehicleQuery);
    
    if (vehicleSnapshot.empty) {
      throw new Error("Vehicle not found");
    }
    
    const vehicleData = vehicleSnapshot.docs[0].data();
    
    return {
      success: true,
      vehicle: {
        id: vehicleSnapshot.docs[0].id,
        ...vehicleData
      }
    };
  } catch (error) {
    console.error("Error getting vehicle details:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Start a charging session
export const startChargingSession = async (vehicleNumber) => {
  try {
    // Verify vehicle exists
    const vehicleResult = await getVehicleDetails(vehicleNumber);
    
    if (!vehicleResult.success) {
      throw new Error("Vehicle not found");
    }
    
    // Create a new charging session
    const sessionRef = await addDoc(collection(db, "chargingSessions"), {
      vehicleNumber: vehicleNumber,
      entryTime: Timestamp.now(),
      exitTime: null,
      energyConsumed: null,
      avgVoltage: null,
      avgCurrent: null,
      paymentStatus: null,
      sensorReadings: []
    });
    
    return {
      success: true,
      sessionId: sessionRef.id
    };
  } catch (error) {
    console.error("Error starting charging session:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// End a charging session
export const endChargingSession = async (sessionId, energyData) => {
  try {
    // Get the session
    const sessionDoc = await getDoc(doc(db, "chargingSessions", sessionId));
    
    if (!sessionDoc.exists()) {
      throw new Error("Charging session not found");
    }
    
    const sessionData = sessionDoc.data();
    
    // Calculate energy consumed
    const energyConsumed = energyData.energyConsumed || 
                          (energyData.avgVoltage * energyData.avgCurrent * 
                           (new Date() - sessionData.entryTime.toDate()) / (1000 * 3600 * 1000));
    
    // Update the session
    await updateDoc(doc(db, "chargingSessions", sessionId), {
      exitTime: Timestamp.now(),
      energyConsumed: energyConsumed,
      avgVoltage: energyData.avgVoltage,
      avgCurrent: energyData.avgCurrent,
      paymentStatus: "pending"
    });
    
    return {
      success: true,
      energyConsumed: energyConsumed
    };
  } catch (error) {
    console.error("Error ending charging session:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Add sensor reading to charging session
export const addSensorReading = async (sessionId, reading) => {
  try {
    // Get the session
    const sessionDoc = await getDoc(doc(db, "chargingSessions", sessionId));
    
    if (!sessionDoc.exists()) {
      throw new Error("Charging session not found");
    }
    
    const sessionData = sessionDoc.data();
    
    // Add reading to sensor readings array
    const sensorReadings = sessionData.sensorReadings || [];
    sensorReadings.push({
      timestamp: Timestamp.now(),
      voltage: reading.voltage,
      current: reading.current
    });
    
    // Update the session
    await updateDoc(doc(db, "chargingSessions", sessionId), {
      sensorReadings: sensorReadings
    });
    
    return {
      success: true
    };
  } catch (error) {
    console.error("Error adding sensor reading:", error);
    return {
      success: false,
      error: error.message
    };
  }
};
