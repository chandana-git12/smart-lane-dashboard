// scripts/setupAdmin.js
// Run this script once to create admin user in Firestore
// You can run this in your browser console or as a separate script

import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const setupAdmin = async () => {
  const adminEmail = 'admin@platform.com';
  const adminPassword = 'admin123'; // Change this to a secure password

  try {
    // Create admin user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
    const user = userCredential.user;

    console.log('Admin user created with UID:', user.uid);

    // Add admin to admins collection
    await setDoc(doc(db, 'admins', user.uid), {
      email: adminEmail,
      role: 'admin',
      createdAt: new Date(),
      name: 'Admin User'
    });

    console.log('Admin document created in admins collection');

    // Also add to users collection with admin role
    await setDoc(doc(db, 'users', user.uid), {
      email: adminEmail,
      role: 'admin',
      createdAt: new Date(),
      name: 'Admin User'
    });

    console.log('Admin user setup complete!');
    
    // Sign out after setup
    await auth.signOut();
    
  } catch (error) {
    console.error('Error setting up admin:', error);
  }
};

// Uncomment the line below to run the setup
// setupAdmin();

// Alternative: Manual setup via Firebase Console
// 1. Go to Firebase Console > Authentication > Users
// 2. Add user with email: admin@platform.com, password: admin123
// 3. Copy the UID
// 4. Go to Firestore Database
// 5. Create collection 'admins' with document ID as the UID
// 6. Add fields: { email: "admin@platform.com", role: "admin", createdAt: timestamp }

export default setupAdmin;