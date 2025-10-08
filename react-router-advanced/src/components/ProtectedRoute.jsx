// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated authentication hook
function useAuth() {
  const user = localStorage.getItem('user'); // or mock any auth logic
  return !!user; // returns true if user exists
}

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // Redirect unauthenticated users to login
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the protected children
  return children;
}
