import React from 'react';
import { LuShoppingBasket } from 'react-icons/lu';
import { MdOutlineStar } from 'react-icons/md';

const ProductCard = ({product}) => {

  const {title, review,price, discountAmount, image} =product
  // console.log(product)

  return (
    <div className="card">
  <figure>
    <img
      src={image}
      alt="Shoes" className='object-cover h-[300px] w-full '/>
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
    <p className='text-xl'>{title}</p>
    <p className='font-bold'>${price}</p>
    <div className="flex justify-end">
      <button className="btn bg-black hover:shadow-yellow-400 hover:shadow-md hover:text-black text-white rounded-full btn-sm">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
