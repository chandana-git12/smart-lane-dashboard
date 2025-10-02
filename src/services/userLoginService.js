// src/services/userLoginService.js
import { db } from '../firebase';
import { ref, set, push, get, serverTimestamp, onDisconnect, update } from 'firebase/database';

export class UserLoginService {
  
  // Function to handle user login and store complete details
  static async loginUser(loginData) {
    try {
      const {
        vehicleNumber,
        ownerName,
        phoneNumber,
        email,
        vehicleModel,
        vehicleType,
        batteryCapacity,
        chargingPortType,
        preferredChargingLocation,
        emergencyContact,
        insuranceDetails,
        registrationCertificate,
        licenseNumber,
        address,
        deviceInfo,
        ipAddress,
        loginLocation,
        gpsCoordinates
      } = loginData;

      // Validate required fields
      if (!vehicleNumber) {
        throw new Error('Vehicle number is required');
      }

      const currentTime = new Date().toISOString();
      const loginId = push(ref(db, 'loginHistory')).key;

      // Store complete user details
      const userDetailsRef = ref(db, `userDetails/${vehicleNumber}`);
      const userDetailsData = {
        vehicleNumber,
        ownerName: ownerName || '',
        phoneNumber: phoneNumber || '',
        email: email || '',
        vehicleModel: vehicleModel || '',
        vehicleType: vehicleType || 'Electric',
        batteryCapacity: batteryCapacity || 0,
        chargingPortType: chargingPortType || 'Type 2',
        preferredChargingLocation: preferredChargingLocation || '',
        emergencyContact: emergencyContact || '',
        insuranceDetails: {
          provider: insuranceDetails?.provider || '',
          policyNumber: insuranceDetails?.policyNumber || '',
          expiryDate: insuranceDetails?.expiryDate || ''
        },
        registrationCertificate: registrationCertificate || '',
        licenseNumber: licenseNumber || '',
        address: {
          street: address?.street || '',
          city: address?.city || '',
          state: address?.state || '',
          zipCode: address?.zipCode || '',
          country: address?.country || 'India'
        },
        lastLoginTime: currentTime,
        registrationDate: null, // Will be set only on first registration
        isActive: true,
        totalChargingSessions: 0,
        totalEnergyConsumed: 0,
        totalAmountPaid: 0,
        preferences: {
          notifications: true,
          autoPayment: false,
          preferredPaymentMethod: 'cash',
          chargingReminders: true,
          language: 'en',
          theme: 'light'
        },
        vehicleSpecifications: {
          manufacturer: vehicleModel?.split(' ')[0] || '',
          model: vehicleModel || '',
          year: new Date().getFullYear(),
          color: '',
          engineType: 'Electric',
          maxChargingSpeed: 0,
          range: 0
        },
        chargingHistory: [],
        paymentHistory: [],
        updatedAt: currentTime
      };

      // Check if user exists, if not set registration date
      const existingUserSnapshot = await get(userDetailsRef);
      if (!existingUserSnapshot.exists()) {
        userDetailsData.registrationDate = currentTime;
        userDetailsData.isNewUser = true;
      } else {
        // Preserve existing registration date and cumulative data
        const existingData = existingUserSnapshot.val();
        userDetailsData.registrationDate = existingData.registrationDate || currentTime;
        userDetailsData.totalChargingSessions = existingData.totalChargingSessions || 0;
        userDetailsData.totalEnergyConsumed = existingData.totalEnergyConsumed || 0;
        userDetailsData.totalAmountPaid = existingData.totalAmountPaid || 0;
        userDetailsData.preferences = { ...userDetailsData.preferences, ...existingData.preferences };
        userDetailsData.vehicleSpecifications = { ...userDetailsData.vehicleSpecifications, ...existingData.vehicleSpecifications };
        userDetailsData.chargingHistory = existingData.chargingHistory || [];
        userDetailsData.paymentHistory = existingData.paymentHistory || [];
        userDetailsData.isNewUser = false;
      }

      await set(userDetailsRef, userDetailsData);

      // Store login history
      const loginHistoryRef = ref(db, `loginHistory/${loginId}`);
      const loginHistoryData = {
        vehicleNumber,
        loginTime: currentTime,
        loginLocation: loginLocation || 'Unknown',
        deviceInfo: deviceInfo || 'Unknown',
        ipAddress: ipAddress || 'Unknown',
        gpsCoordinates: gpsCoordinates || { lat: 0, lng: 0 },
        sessionDuration: 0,
        isActive: true,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
        loginMethod: 'vehicle_number',
        loginId,
        browser: this.getBrowserInfo(),
        os: this.getOSInfo(),
        screenResolution: this.getScreenResolution(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      await set(loginHistoryRef, loginHistoryData);

      // Set user as online
      const onlineUserRef = ref(db, `onlineUsers/${vehicleNumber}`);
      const onlineUserData = {
        vehicleNumber,
        isOnline: true,
        lastSeen: currentTime,
        status: 'active',
        chargingStatus: 'not_charging',
        currentLocation: loginLocation || 'Unknown',
        batteryLevel: 100, // Default, should be updated from vehicle
        connectionType: 'WiFi', // Default, should be detected
        loginId,
        sessionStartTime: currentTime,
        preferences: userDetailsData.preferences,
        gpsCoordinates: gpsCoordinates || { lat: 0, lng: 0 },
        deviceInfo: deviceInfo || 'Unknown',
        lastActivity: currentTime
      };

      await set(onlineUserRef, onlineUserData);

      // Set up automatic logout on disconnect
      const disconnectRef = onDisconnect(onlineUserRef);
      await disconnectRef.set({
        ...onlineUserData,
        isOnline: false,
        lastSeen: serverTimestamp(),
        status: 'offline',
        disconnectTime: serverTimestamp()
      });

      // Update login history on disconnect
      const loginHistoryDisconnectRef = onDisconnect(loginHistoryRef);
      await loginHistoryDisconnectRef.update({
        logoutTime: serverTimestamp(),
        isActive: false,
        disconnectReason: 'auto_disconnect'
      });

      // Add to vehicles collection if not exists
      const vehicleRef = ref(db, `vehicles/${vehicleNumber}`);
      const vehicleSnapshot = await get(vehicleRef);
      
      if (!vehicleSnapshot.exists()) {
        await set(vehicleRef, {
          vehicleNumber,
          ownerName: ownerName || '',
          vehicleModel: vehicleModel || '',
          registrationDate: currentTime,
          isActive: true,
          lastSeen: currentTime
        });
      }

      console.log('User login successful:', vehicleNumber);
      return {
        success: true,
        message: 'Login successful',
        userData: userDetailsData,
        loginId,
        isNewUser: userDetailsData.isNewUser
      };

    } catch (error) {
      console.error('Error during user login:', error);
      throw error;
    }
  }

  // Function to update user online status
  static async updateUserStatus(vehicleNumber, statusData) {
    try {
      const {
        batteryLevel,
        chargingStatus,
        currentLocation,
        gpsCoordinates,
        connectionType,
        activity
      } = statusData;

      const currentTime = new Date().toISOString();
      const onlineUserRef = ref(db, `onlineUsers/${vehicleNumber}`);
      
      // Get existing data first
      const existingSnapshot = await get(onlineUserRef);
      const existingData = existingSnapshot.exists() ? existingSnapshot.val() : {};

      const updateData = {
        ...existingData,
        lastSeen: currentTime,
        batteryLevel: batteryLevel !== undefined ? batteryLevel : existingData.batteryLevel || 100,
        chargingStatus: chargingStatus || existingData.chargingStatus || 'not_charging',
        currentLocation: currentLocation || existingData.currentLocation || 'Unknown',
        connectionType: connectionType || existingData.connectionType || 'WiFi',
        lastActivity: currentTime,
        isOnline: true,
        status: 'active'
      };

      if (gpsCoordinates) {
        updateData.gpsCoordinates = gpsCoordinates;
      }

      if (activity) {
        updateData.lastActivity = currentTime;
        updateData.activityType = activity;
      }

      await update(onlineUserRef, updateData);
      
      // Also update user details with last seen time
      const userDetailsRef = ref(db, `userDetails/${vehicleNumber}`);
      await update(userDetailsRef, {
        lastSeenTime: currentTime,
        updatedAt: currentTime
      });
      
      return { success: true, message: 'Status updated successfully' };
    } catch (error) {
      console.error('Error updating user status:', error);
      throw error;
    }
  }

  // Function to handle user logout
  static async logoutUser(vehicleNumber, loginId) {
    try {
      const currentTime = new Date().toISOString();

      // Update online users
      const onlineUserRef = ref(db, `onlineUsers/${vehicleNumber}`);
      const onlineSnapshot = await get(onlineUserRef);
      
      if (onlineSnapshot.exists()) {
        const onlineData = onlineSnapshot.val();
        await update(onlineUserRef, {
          isOnline: false,
          lastSeen: currentTime,
          status: 'offline',
          logoutTime: currentTime,
          sessionDuration: new Date(currentTime) - new Date(onlineData.sessionStartTime || currentTime)
        });
      }

      // Update login history
      if (loginId) {
        const loginHistoryRef = ref(db, `loginHistory/${loginId}`);
        const loginSnapshot = await get(loginHistoryRef);
        
        if (loginSnapshot.exists()) {
          const loginData = loginSnapshot.val();
          const sessionDuration = new Date(currentTime) - new Date(loginData.loginTime);
          
          await update(loginHistoryRef, {
            logoutTime: currentTime,
            sessionDuration: Math.round(sessionDuration / 1000), // in seconds
            isActive: false,
            logoutReason: 'manual_logout'
          });
        }
      }

      // Update user details last seen
      const userDetailsRef = ref(db, `userDetails/${vehicleNumber}`);
      await update(userDetailsRef, {
        lastSeenTime: currentTime,
        updatedAt: currentTime,
        isActive: false
      });

      return { success: true, message: 'Logout successful' };
    } catch (error) {
      console.error('Error during user logout:', error);
      throw error;
    }
  }

  // Function to get user details
  static async getUserDetails(vehicleNumber) {
    try {
      const userDetailsRef = ref(db, `userDetails/${vehicleNumber}`);
      const snapshot = await get(userDetailsRef);
      
      if (snapshot.exists()) {
        return {
          success: true,
          userData: snapshot.val()
        };
      } else {
        return {
          success: false,
          message: 'User not found'
        };
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  }

  // Function to update user profile
  static async updateUserProfile(vehicleNumber, profileData) {
    try {
      const userDetailsRef = ref(db, `userDetails/${vehicleNumber}`);
      const currentTime = new Date().toISOString();
      
      const updateData = {
        ...profileData,
        updatedAt: currentTime
      };

      await update(userDetailsRef, updateData);
      
      return { success: true, message: 'Profile updated successfully' };
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  }

  // Function to start charging session
  static async startChargingSession(vehicleNumber, chargingData) {
    try {
      const {
        stationId,
        chargingLocation,
        chargingType,
        targetEnergyLevel,
        estimatedTime
      } = chargingData;

      const currentTime = new Date().toISOString();
      const sessionId = push(ref(db, 'chargingSessions')).key;

      // Create charging session
      const chargingSessionRef = ref(db, `chargingSessions/${sessionId}`);
      const sessionData = {
        sessionId,
        vehicleNumber,
        stationId: stationId || 'station_01',
        chargingLocation: chargingLocation || 'Unknown',
        chargingType: chargingType || 'AC',
        entryTime: currentTime,
        exitTime: null,
        energyConsumed: 0,
        targetEnergyLevel: targetEnergyLevel || 100,
        estimatedTime: estimatedTime || 60,
        actualTime: 0,
        cost: 0,
        paymentStatus: 'pending',
        isActive: true,
        startBatteryLevel: 0,
        endBatteryLevel: 0,
        chargingSpeed: 0,
        powerRating: 0
      };

      await set(chargingSessionRef, sessionData);

      // Update user's online status
      await this.updateUserStatus(vehicleNumber, {
        chargingStatus: 'charging',
        currentLocation: chargingLocation,
        activity: 'charging_started'
      });

      // Update user's charging history
      const userDetailsRef = ref(db, `userDetails/${vehicleNumber}`);
      const userSnapshot = await get(userDetailsRef);
      
      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();
        const chargingHistory = userData.chargingHistory || [];
        chargingHistory.push({
          sessionId,
          startTime: currentTime,
          location: chargingLocation,
          status: 'active'
        });

        await update(userDetailsRef, {
          chargingHistory: chargingHistory.slice(-10), // Keep last 10 sessions
          totalChargingSessions: (userData.totalChargingSessions || 0) + 1,
          updatedAt: currentTime
        });
      }

      return { 
        success: true, 
        message: 'Charging session started',
        sessionId,
        sessionData
      };
    } catch (error) {
      console.error('Error starting charging session:', error);
      throw error;
    }
  }

  // Function to end charging session
  static async endChargingSession(sessionId, endData) {
    try {
      const {
        energyConsumed,
        endBatteryLevel,
        cost,
        paymentMethod
      } = endData;

      const currentTime = new Date().toISOString();
      const chargingSessionRef = ref(db, `chargingSessions/${sessionId}`);
      
      const sessionSnapshot = await get(chargingSessionRef);
      if (!sessionSnapshot.exists()) {
        throw new Error('Charging session not found');
      }

      const sessionData = sessionSnapshot.val();
      const actualTime = (new Date(currentTime) - new Date(sessionData.entryTime)) / 1000 / 60; // in minutes

      // Update charging session
      await update(chargingSessionRef, {
        exitTime: currentTime,
        energyConsumed: energyConsumed || 0,
        endBatteryLevel: endBatteryLevel || 100,
        cost: cost || 0,
        actualTime: Math.round(actualTime),
        paymentMethod: paymentMethod || 'cash',
        isActive: false,
        completedAt: currentTime
      });

      // Update user's online status
      await this.updateUserStatus(sessionData.vehicleNumber, {
        chargingStatus: 'not_charging',
        batteryLevel: endBatteryLevel,
        activity: 'charging_completed'
      });

      // Update user's totals
      const userDetailsRef = ref(db, `userDetails/${sessionData.vehicleNumber}`);
      const userSnapshot = await get(userDetailsRef);
      
      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();
        await update(userDetailsRef, {
          totalEnergyConsumed: (userData.totalEnergyConsumed || 0) + (energyConsumed || 0),
          totalAmountPaid: (userData.totalAmountPaid || 0) + (cost || 0),
          updatedAt: currentTime
        });
      }

      return { 
        success: true, 
        message: 'Charging session completed',
        sessionData: {
          ...sessionData,
          exitTime: currentTime,
          energyConsumed,
          cost,
          actualTime: Math.round(actualTime)
        }
      };
    } catch (error) {
      console.error('Error ending charging session:', error);
      throw error;
    }
  }

  // Helper function to get browser info
  static getBrowserInfo() {
    if (typeof navigator === 'undefined') return 'Unknown';
    
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown';
    
    if (userAgent.includes('Chrome')) browserName = 'Chrome';
    else if (userAgent.includes('Firefox')) browserName = 'Firefox';
    else if (userAgent.includes('Safari')) browserName = 'Safari';
    else if (userAgent.includes('Edge')) browserName = 'Edge';
    else if (userAgent.includes('Opera')) browserName = 'Opera';
    
    return browserName;
  }

  // Helper function to get OS info
  static getOSInfo() {
    if (typeof navigator === 'undefined') return 'Unknown';
    
    const userAgent = navigator.userAgent;
    let osName = 'Unknown';
    
    if (userAgent.includes('Windows')) osName = 'Windows';
    else if (userAgent.includes('Mac')) osName = 'macOS';
    else if (userAgent.includes('Linux')) osName = 'Linux';
    else if (userAgent.includes('Android')) osName = 'Android';
    else if (userAgent.includes('iOS')) osName = 'iOS';
    
    return osName;
  }

  // Helper function to get screen resolution
  static getScreenResolution() {
    if (typeof screen === 'undefined') return 'Unknown';
    return `${screen.width}x${screen.height}`;
  }

  // Function to get user analytics
  static async getUserAnalytics(vehicleNumber) {
    try {
      const userDetailsRef = ref(db, `userDetails/${vehicleNumber}`);
      const chargingSessionsRef = ref(db, 'chargingSessions');
      const loginHistoryRef = ref(db, 'loginHistory');
      
      const [userSnapshot, sessionsSnapshot, loginSnapshot] = await Promise.all([
        get(userDetailsRef),
        get(chargingSessionsRef),
        get(loginHistoryRef)
      ]);
      
      const userData = userSnapshot.exists() ? userSnapshot.val() : {};
      const allSessions = sessionsSnapshot.exists() ? sessionsSnapshot.val() : {};
      const allLogins = loginSnapshot.exists() ? loginSnapshot.val() : {};
      
      // Filter sessions for this user
      const userSessions = Object.values(allSessions).filter(
        session => session.vehicleNumber === vehicleNumber
      );
      
      // Filter logins for this user
      const userLogins = Object.values(allLogins).filter(
        login => login.vehicleNumber === vehicleNumber
      );
      
      // Calculate analytics
      const analytics = {
        totalSessions: userSessions.length,
        totalEnergyConsumed: userData.totalEnergyConsumed || 0,
        totalAmountPaid: userData.totalAmountPaid || 0,
        averageSessionTime: userSessions.length > 0 
          ? userSessions.reduce((acc, session) => acc + (session.actualTime || 0), 0) / userSessions.length
          : 0,
        averageEnergyPerSession: userSessions.length > 0
          ? (userData.totalEnergyConsumed || 0) / userSessions.length
          : 0,
        totalLogins: userLogins.length,
        averageSessionDuration: userLogins.length > 0
          ? userLogins.reduce((acc, login) => acc + (login.sessionDuration || 0), 0) / userLogins.length
          : 0,
        mostUsedLocation: this.getMostUsedLocation(userSessions),
        chargingPattern: this.getChargingPattern(userSessions),
        registrationDate: userData.registrationDate,
        lastActivity: userData.lastSeenTime || userData.lastLoginTime
      };
      
      return { success: true, analytics };
    } catch (error) {
      console.error('Error getting user analytics:', error);
      throw error;
    }
  }

  // Helper function to get most used location
  static getMostUsedLocation(sessions) {
    const locationCounts = {};
    sessions.forEach(session => {
      const location = session.chargingLocation || 'Unknown';
      locationCounts[location] = (locationCounts[location] || 0) + 1;
    });
    
    let mostUsed = 'Unknown';
    let maxCount = 0;
    
    Object.entries(locationCounts).forEach(([location, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostUsed = location;
      }
    });
    
    return mostUsed;
  }

  // Helper function to get charging pattern
  static getChargingPattern(sessions) {
    const hourCounts = new Array(24).fill(0);
    
    sessions.forEach(session => {
      if (session.entryTime) {
        const hour = new Date(session.entryTime).getHours();
        hourCounts[hour]++;
      }
    });
    
    const peakHour = hourCounts.indexOf(Math.max(...hourCounts));
    
    return {
      peakHour,
      hourlyDistribution: hourCounts,
      totalSessions: sessions.length
    };
  }
}

export default UserLoginService;