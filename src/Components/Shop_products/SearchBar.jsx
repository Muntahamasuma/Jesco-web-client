import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({handleSearch}) => {
  return (
    <form onSubmit={handleSearch} className='flex items-center gap-[2px]'>
      <input 
      type="text" 
      placeholder='search products' 
      name="search" 
      className='max-w-md p-[11px] border border-black rounded-l-md'/>
      <button type='submit' className='btn btn-outline rounded-l-none rounded-r-md bg-gray-300'>
      <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;