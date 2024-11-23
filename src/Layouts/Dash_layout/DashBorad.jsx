import React from 'react';
import { Outlet } from 'react-router-dom';
import Dash_Sidebar from '../../Components/DashBoard/Dash_Sidebar';

const DashBorad = () => {
  return (
    <div className='grid lg:grid-cols-12'>
      <div className='col-span-2'>
        <Dash_Sidebar/>
      </div>
      <div className='col-span-10 p-12'>
        <Outlet/>
      </div>
    </div>
  );
};

export default DashBorad;