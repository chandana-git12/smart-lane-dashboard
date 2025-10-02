// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null); // Add userType state
  const [loading, setLoading] = useState(true);

  // Check for existing user session on app start
  useEffect(() => {
    const checkExistingSession = () => {
      try {
        const savedUserData = localStorage.getItem('userData');
        if (savedUserData) {
          const parsedUserData = JSON.parse(savedUserData);
          setCurrentUser({
            uid: parsedUserData.vehicleNumber || parsedUserData.uid,
            isVehicleUser: true,
            userData: parsedUserData
          });
          setUserType('user'); // Set userType for vehicle users
        }
      } catch (error) {
        console.error('Error checking existing session:', error);
        localStorage.removeItem('userData');
      } finally {
        setLoading(false);
      }
    };

    checkExistingSession();
  }, []);

  // Vehicle-based login
  const vehicleLogin = async (vehicleNumber, userData = null) => {
    try {
      setLoading(true);
      
      let vehicleData = userData;
      
      // If no userData provided, try to fetch from Firebase
      if (!vehicleData && db) {
        const vehicleRef = ref(db, `vehicles/${vehicleNumber}`);
        const snapshot = await get(vehicleRef);
        vehicleData = snapshot.val();
      }

      // If still no data, create basic structure
      if (!vehicleData) {
        vehicleData = {
          vehicleNumber: vehicleNumber,
          ownerName: 'Unknown',
          email: '',
          vehicleModel: '',
          batteryLevel: 85,
          isActive: true,
          registrationDate: new Date().toISOString()
        };
      }

      // Save to localStorage
      localStorage.setItem('userData', JSON.stringify(vehicleData));
      
      // Set current user
      const userObj = {
        uid: vehicleNumber,
        isVehicleUser: true,
        userData: vehicleData
      };
      
      setCurrentUser(userObj);
      setUserType('user'); // Set userType for vehicle users
      
      return { success: true, user: userObj };
    } catch (error) {
      console.error('Vehicle login error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Admin login function (if needed)
  const adminLogin = async (credentials) => {
    try {
      setLoading(true);
      // Add your admin login logic here
      // For now, just a placeholder
      const adminUser = {
        uid: 'admin',
        isAdmin: true,
        userData: credentials
      };
      
      setCurrentUser(adminUser);
      setUserType('admin');
      
      return { success: true, user: adminUser };
    } catch (error) {
      console.error('Admin login error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    setUserType(null);
    localStorage.removeItem('userData');
  };

  // Check if user is logged in
  const isLoggedIn = () => {
    return currentUser !== null;
  };

  const value = {
    currentUser,
    userType, // Add userType to the context value
    setCurrentUser,
    vehicleLogin,
    adminLogin,
    logout,
    isLoggedIn,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };