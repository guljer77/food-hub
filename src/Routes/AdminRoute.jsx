import React from 'react'
import { useAuth } from '../Hooks/useAuth'
import { useAdmin } from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

function AdminRoute({children}) {
  const location = useLocation();
  const {user, loading} = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if(loading || isAdminLoading){
    return <h2>Loading.....</h2>
  }
  if(user && isAdmin){
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace/>
}

export default AdminRoute