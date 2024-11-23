import React from 'react';
import useAuth from '../Hooks/useAuth';

const Dash_overview = () => {
  const {user} = useAuth();
  console.log(user)
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <h3 className='text-xl font-bold text-center'>{user.email}</h3>
    </div>
  );
};

export default Dash_overview;