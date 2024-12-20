import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Loading from '../Components/Loading/Loading';

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth();
  const location = useLocation();

  if(loading){
    return <Loading/>
  }
  if(user){
    return children
  }
  return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;