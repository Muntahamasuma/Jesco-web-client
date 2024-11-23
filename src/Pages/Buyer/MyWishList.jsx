import React, { useEffect, useState } from 'react';
import useUserData from '../../Hooks/useUserData';
import axios from 'axios';
import Shop_product from '../../Components/Shop_products/Shop_product';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router-dom';

const MyWishList = () => {
  const [wishlist, SetWishlist] = useState([]);
  const [loading, SetLoading] = useState(false);
const userData = useUserData();
const token = localStorage.getItem('access-token')

  useEffect(()=>{
const fetchWishlist = async()=>{
  SetLoading(true);
  await axios.get(`http://localhost:5000/wishlist/${userData._id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) => {
    SetWishlist(res.data)
    SetLoading(false)
  })
};
if(userData._id && token){
  fetchWishlist();
}
  },[token, userData._id])

  return (
    <div>
      <h2 className='text-[#FD6B64] font-bold text-4xl text-center mb-5'>My Wishlist</h2>
      <Link to='/shop'><h2 className="text-[#FD466A] text-sm font-semibold underline lato-font text-center mb-10">Shop</h2></Link>
      <div className=''>
       {loading ? (
            <Loading />
          ) : (
            <>
              {wishlist.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-center font-bold text-3xl">
                    No Product Found
                  </h1>
                </div>
              ) : (
                <div className="w-full min-h-screen grid lg:grid-cols-3 gap-6 mb-12 px-2 items-center">
                  {wishlist.map((product) => (
                    <Shop_product key={product._id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
      </div>
    </div>
  );
};

export default MyWishList;