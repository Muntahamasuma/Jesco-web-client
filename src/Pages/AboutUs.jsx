import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (

      
    <div className="hero bg-[#FCF6F6] min-h-screen">
      
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co.com/Rjzjh5J/image-removebg-preview-5.png"
      className="max-w-sm rounded-lg object-contain " />

    <div className='lato-font text-[#3C3C60] text-center lg:text-left'>
      <h1 className="text-5xl ">About Us</h1>
      <p className="py-6 w-4/5">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius modjior tem incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamyl quinol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisau irure dolor in reprehenderit in voluptate velit esse cillum dolore euhti fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
      </p>
      <img src="https://i.ibb.co.com/WPVZSKt/image.png" alt="" />
      <Link to='/'><h2 className="text-[#FD466A] text-sm font-semibold underline lato-font text-center lg:text-left pt-10">Home</h2></Link>
    </div>
  </div>
</div>
  );
};

export default AboutUs;