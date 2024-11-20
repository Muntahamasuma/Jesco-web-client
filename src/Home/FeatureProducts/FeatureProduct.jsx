import React from 'react';
import ProductCard from './ProductCard';

const FeatureProduct = () => {

  const products = [
    { id: 1, name: 'Product 1', price: '$100', imageUrl: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: '$200', imageUrl: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: '$300', imageUrl: 'path/to/image3.jpg' },
    { id: 1, name: 'Product 1', price: '$100', imageUrl: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: '$200', imageUrl: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: '$300', imageUrl: 'path/to/image3.jpg' },
    { id: 2, name: 'Product 2', price: '$200', imageUrl: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: '$300', imageUrl: 'path/to/image3.jpg' },
    // Add more products as needed
  ];

  return (
    <div className='my-20'>
      <div>
        <h2 className='text-[#FD6B64] font-bold text-3xl'>#feature_products</h2>
        <div className='border-t border-gray-300 mt-6'></div>

        {/* map */}
        <div className='grid grid-flow-col lg:grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
        {
          products.map((product)=> <ProductCard key={product} product={product}/>)
        }
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;