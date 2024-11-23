import React from 'react';
import { MdOutlineStar } from 'react-icons/md';
import useUserData from '../../Hooks/useUserData';
import axios from 'axios';
import Swal from 'sweetalert2';

const Shop_product = ({product, isWishlist, setlatestData}) => {
  const {title, review,price, discountAmount, image} =product

  const userData = useUserData();
  const userEmail = userData.email
  // console.log(userEmail)

  const handleWishlist = async () =>{
    await axios.patch('https://final-run-1-server.vercel.app/wishlist/add',{
      userEmail: userEmail,
      productId: product._id
    })
    .then((res)=> {
      if(res.data.modifiedCount){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added to your wishlist",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
      }
    })
  };

  const handleRemoveWishlist = async () =>{
    await axios.patch('https://final-run-1-server.vercel.app/wishlist/remove',{
      userEmail: userEmail,
      productId: product._id
    })
    .then((res)=> {
      if(res.data.modifiedCount){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Remove from your wishlist",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
        setlatestData((prev) => !prev);
      }
    })
  };

  return (
    <div className="card">
  <figure>
    <img
      src={image}
      alt="Shoes" className='object-cover h-[300px] w-full'/>
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
    {
      isWishlist? (<div className="flex justify-end">
      <button onClick={handleRemoveWishlist} className="btn bg-red-400 text-white hover:shadow-yellow-400 hover:shadow-md hover:text-black rounded-full btn-sm">Remove From Wishlist</button>
    </div>) :
    (<div className="flex justify-end">
    <button onClick={handleWishlist} className="btn bg-black hover:shadow-yellow-400 hover:shadow-md hover:text-black text-white rounded-full btn-sm">Add to Wishlist</button>
  </div>)
    }
  </div>
</div>
  );
};

export default Shop_product;