import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const ProductCard = ({product}) => {
  return (
    <div className="card">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="flex gap-1 items-center">
    <MdOutlineStar className='text-yellow-400' size={20}/>
    <MdOutlineStar className='text-yellow-400' size={20}/>
    <MdOutlineStar className='text-yellow-400' size={20}/>
    <MdOutlineStar className='text-yellow-400' size={20}/>
    <MdOutlineStar className='text-yellow-400' size={20}/>
      <div className="text-gray-400">(5 Review)</div>
    </h2>
    <p className='text-xl'>Women's Elizabeth Coat</p>
    <p className='font-bold'>$45.27</p>
    
  </div>
</div>
  );
};

export default ProductCard;