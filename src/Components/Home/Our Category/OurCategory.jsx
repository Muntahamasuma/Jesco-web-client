import React from 'react';

const OurCategory = () => {
  return (
    <div className='my-10'>
      <h2 className='text-[#FD6B64] font-bold text-4xl'>#Our_Categories</h2>
      <div className='border-t border-gray-300 mt-6'></div>

      {/* categories */}
      <div className='grid grid-flow-col col-span-1 lg:col-span-3 justify-center items-center gap-12 my-10'>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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