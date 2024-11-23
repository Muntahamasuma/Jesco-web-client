import React from 'react';

const SortByPrice = ({setSort}) => {
  return (
    <select onChange={(e) => setSort(e.target.value)} className="select select-bordered max-w-md w-40 rounded-md border-black">
  <option disabled selected>Sort Here</option>
  <option value='asc'>Low to high</option>
  <option value='desc'>High to low</option>
</select>
  );
};

export default SortByPrice;