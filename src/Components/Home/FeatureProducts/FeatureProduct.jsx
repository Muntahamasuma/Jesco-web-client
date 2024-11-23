import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

const FeatureProduct = () => {

  const [loading, setLoading]= useState(false);
  const [products, setProducts]= useState([]);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios
        .get(
          `http://localhost:5000/addproducts`
        )
        .then((res) => {
          setProducts(res.data.products);
          console.log(res.data)
          setLoading(false);
        });
    };
    fetch();
  }, []);

  return (
    <div className='my-20'>
      <div>
        <h2 className='text-[#FD6B64] font-bold text-4xl'>#feature_products</h2>
        <div className='border-t border-gray-300 mt-6'></div>

        {/* map */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-5'>
        {
          products.map((product)=> <ProductCard key={product._id} product={product}/>)
        }
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;