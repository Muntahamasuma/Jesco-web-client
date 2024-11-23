import React from 'react';

const OurCategory = () => {
  return (
    <div className='my-10'>
      <h2 className='text-[#FD6B64] font-bold text-4xl'>#Our_Categories</h2>
      <div className='border-t border-gray-300 mt-6'></div>

      {/* categories */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center my-10'>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/n72kBKm/6.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Women</h2>
    <p>16 Items</p>
  </div>
</div>
<div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/98mWNgY/7-1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">#best_seller</h2>
    <p>Buy now</p>
  </div>
</div>
<div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/d2PwygD/3.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Nomen</h2>
    <p>18 Items</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default OurCategory;