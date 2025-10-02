// services/imageProcessingService.js
import { storage, db } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

// Process vehicle number plate image
export const processNumberPlateImage = async (imageFile) => {
  try {
    // Upload the image to Firebase Storage
    const storageRef = ref(storage, 'number-plates/' + Date.now() + '_' + imageFile.name);
    await uploadBytes(storageRef, imageFile);
    
    // Get the download URL
    const imageUrl = await getDownloadURL(storageRef);
    
    // In a real app, you would send this image to your backend
    // where OpenCV would process it to extract the number plate
    // For demo purposes, we'll simulate this with a delay
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate a detected number plate (in a real app, this would come from OpenCV)
    // In this demo, we'll just return a random plate number
    const randomPlate = 'KA' + Math.floor(Math.random() * 99).toString().padStart(2, '0') + 
                        'AB' + Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    
    // Store the detection in Firestore
    await addDoc(collection(db, "plateDetections"), {
      imageUrl: imageUrl,
      detectedPlate: randomPlate,
      detectedAt: new Date(),
      confidence: 0.95 // Simulated confidence score
    });
    
    // Check if this vehicle exists in our database
    const vehicleQuery = query(
      collection(db, "vehicles"),
      where("vehicleNumber", "==", randomPlate)
    );
    
    const vehicleSnapshot = await getDocs(vehicleQuery);
    const vehicleExists = !vehicleSnapshot.empty;
    
    return {
      success: true,
      imageUrl: imageUrl,
      detectedPlate: randomPlate,
      vehicleExists: vehicleExists
    };
  } catch (error) {
    console.error("Error processing number plate image:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Verify detected plate with database
export const verifyNumberPlate = async (detectedPlate) => {
  try {
    const vehicleQuery = query(
      collection(db, "vehicles"),
      where("vehicleNumber", "==", detectedPlate)
    );
    
    const vehicleSnapshot = await getDocs(vehicleQuery);
    
    if (vehicleSnapshot.empty) {
      return {
        success: true,
        verified: false,
        message: "Vehicle not registered in the system"
      };
    }
    
    const vehicleData = vehicleSnapshot.docs[0].data();
    
    return {
      success: true,
      verified: true,
      vehicle: {
        id: vehicleSnapshot.docs[0].id,
        vehicleNumber: vehicleData.vehicleNumber,
        ownerName: vehicleData.ownerName
      }
    };
  } catch (error) {
    console.error("Error verifying number plate:", error);
    return {
      success: false,
      error: error.message
    };
  }
};
