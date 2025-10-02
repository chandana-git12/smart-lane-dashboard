// services/chargingService.js
import { db } from '../firebase';
import { 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp
} from 'firebase/firestore';

// Get active charging sessions
export const getActiveChargingSessions = async () => {
  try {
    const sessionsQuery = query(
      collection(db, "chargingSessions"),
      where("exitTime", "==", null),
      orderBy("entryTime", "desc")
    );
    
    const sessionsSnapshot = await getDocs(sessionsQuery);
    
    const sessions = [];
    
    sessionsSnapshot.forEach(doc => {
      sessions.push({
        id: doc.id,
        ...doc.data(),
        entryTime: doc.data().entryTime.toDate()
      });
    });
    
    return {
      success: true,
      sessions: sessions
    };
  } catch (error) {
    console.error("Error getting active charging sessions:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Get charging history for a vehicle
export const getVehicleChargingHistory = async (vehicleNumber, limit = 10) => {
  try {
    const sessionsQuery = query(
      collection(db, "chargingSessions"),
      where("vehicleNumber", "==", vehicleNumber),
      orderBy("entryTime", "desc"),
      limit(limit)
    );
    
    const sessionsSnapshot = await getDocs(sessionsQuery);
    
    const sessions = [];
    
    sessionsSnapshot.forEach(doc => {
      sessions.push({
        id: doc.id,
        ...doc.data(),
        entryTime: doc.data().entryTime.toDate(),
        exitTime: doc.data().exitTime ? doc.data().exitTime.toDate() : null
      });
    });
    
    return {
      success: true,
      sessions: sessions
    };
  } catch (error) {
    console.error("Error getting vehicle charging history:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Get charging statistics
export const getChargingStatistics = async (timeRange = 'day') => {
  try {
    // Calculate date range
    const now = new Date();
    let startDate;
    
    if (timeRange === 'day') {
      startDate = new Date(now);
      startDate.setHours(0, 0, 0, 0);
    } else if (timeRange === 'week') {
      startDate = new Date(now);
      startDate.setDate(now.getDate() - 7);
    } else if (timeRange === 'month') {
      startDate = new Date(now);
      startDate.setMonth(now.getMonth() - 1);
    } else if (timeRange === 'year') {
      startDate = new Date(now);
      startDate.setFullYear(now.getFullYear() - 1);
    }
    
    const sessionsQuery = query(
      collection(db, "chargingSessions"),
      where("entryTime", ">=", Timestamp.fromDate(startDate)),
      orderBy("entryTime", "desc")
    );
    
    const sessionsSnapshot = await getDocs(sessionsQuery);
    
    let totalSessions = 0;
    let totalEnergy = 0;
    let totalDuration = 0;
    let activeSessionsCount = 0;
    
    sessionsSnapshot.forEach(doc => {
      const session = doc.data();
      totalSessions++;
      
      if (session.exitTime === null) {
        activeSessionsCount++;
      } else {
        if (session.energyConsumed) {
          totalEnergy += session.energyConsumed;
        }
        
        // Calculate duration in minutes
        const duration = (session.exitTime.toDate() - session.entryTime.toDate()) / (1000 * 60);
        totalDuration += duration;
      }
    });
    
    const avgEnergyPerSession = totalSessions > activeSessionsCount 
      ? totalEnergy / (totalSessions - activeSessionsCount) 
      : 0;
    
    const avgDurationPerSession = totalSessions > activeSessionsCount 
      ? totalDuration / (totalSessions - activeSessionsCount) 
      : 0;
    
    return {
      success: true,
      stats: {
        totalSessions,
        activeSessionsCount,
        totalEnergy: totalEnergy.toFixed(2),
        avgEnergyPerSession: avgEnergyPerSession.toFixed(2),
        avgDurationPerSession: avgDurationPerSession.toFixed(2)
      }
    };
  } catch (error) {
    console.error("Error getting charging statistics:", error);
    return {
      success: false,
      error: error.message
    };
  }
};
