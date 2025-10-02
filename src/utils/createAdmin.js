// src/utils/createAdmin.js
// This is a utility function to create admin accounts
// Run this once to set up your admin user

import { auth, database } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

export const createAdminAccount = async (email, password) => {
  try {
    // Create the user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Add to admins in Realtime Database
    await set(ref(database, `admins/${user.uid}`), {
      email: email,
      role: 'admin',
      createdAt: new Date().toISOString()
    });
    
    console.log('Admin account created successfully:', user.uid);
    return { success: true, uid: user.uid };
  } catch (error) {
    console.error('Error creating admin account:', error);
    return { success: false, error: error.message };
  }
};

// Usage example - call this once:
// createAdminAccount('admin@platform.com', 'admin123');