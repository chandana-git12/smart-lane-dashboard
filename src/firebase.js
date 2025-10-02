


// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6K5Hm2y3_e3fYTdM3WhKwR_bv01yiNds",
  authDomain: "grass-cutting-55274.firebaseapp.com",
  databaseURL: "https://grass-cutting-55274-default-rtdb.firebaseio.com",
  projectId: "grass-cutting-55274",
  storageBucket: "grass-cutting-55274.firebasestorage.app",
  messagingSenderId: "1027494729441",
  appId: "1:1027494729441:web:81da7b4c7e4401f08c49a0",
  measurementId: "G-RJYC4NWMQV"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;