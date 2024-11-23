import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { HiOutlineFilter } from "react-icons/hi";

const FilterBar = ({setCategory, handleReset, uniqueCategory}) => {
  return (
    <div className="bg-gray-200 h-full min-h-screen p-4 rounded-t-md ">
      <div className="flex items-center gap-1">
        <HiOutlineFilter size={24} />
        <h2 className="font-bold text-lg">Filters</h2>
      </div>

      <div className="mt-8 flex flex-col gap-3 items-center">
        
        <div className="w-full">
          <select onChange={(e)=>setCategory(e.target.value)} className="select select-bordered w-full rounded-md border-black">
          <option value="">Categories</option>
            {
              uniqueCategory.map((category)=>(
                <option 
                key={category} 
                value={category}>
                  {category}
                </option>
              ))
            }
          </select>
        </div>
      </div>
      <button onClick={handleReset} className="my-4 btn flex items-center border-none bg-[#FF7004] rounded-full btn-sm lg:btn-sm w-full px-12 text-lg text-white bg-gradient-to-r from-[#FD7364] to-[#FD466A] hover:bg-gradient-to-r hover:from-[#FD466A] hover:to-[#FD7364] hover:shadow-lg">
        <p>Reset</p>
      <GrPowerReset size={18} />
      </button>
    </div>
  );
};

export default FilterBar;