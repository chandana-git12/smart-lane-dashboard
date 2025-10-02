// src/components/common/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const PrivateRoute = ({ children, userType }) => {
  const { currentUser, userType: currentUserType, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log('PrivateRoute check:', {
    currentUser: currentUser?.uid,
    currentUserType,
    requiredUserType: userType,
    loading,
    path: location.pathname
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!currentUser) {
    console.log('No current user, redirecting to login');
    // Redirect to appropriate login page based on the required userType
    const loginPath = userType === 'admin' ? '/admin/login' : '/user/login';
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  if (userType && currentUserType !== userType) {
    console.log('User type mismatch, redirecting to login');
    // Unauthorized access, redirect to appropriate login page
    const loginPath = userType === 'admin' ? '/admin/login' : '/user/login';
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  console.log('Access granted, rendering children');
  return children;
};

export default PrivateRoute;