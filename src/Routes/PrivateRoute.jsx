import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <h2>Loading....</h2>;
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
}

export default PrivateRoute;
