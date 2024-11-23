import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";
import useAuth from "../../Hooks/useAuth";

const sellerRoutes = [
  {
    id:1,
    route:'/dashboard/myproducts',
    title: "My Product",
    icon:<MdOutlineInventory2 />
  },
  {
    id:2,
    route:'/dashboard/addproducts',
    title: "Add Product",
    icon:<AiOutlineProduct />
  }
]
const Dash_Sidebar = () => {
  const {logout} = useAuth()
  const userData = useUserData();
  // console.log(userData)
  {
    userData?.message === "No User Found" && (
      <p className="text-red-500">User not found. Please check your account details.</p>
    )
  }
  

  const handleLogout=()=>{
logout()
  }

  return (
    <div className="bg-gray-100 border-r border-black h-screen px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Gadget Shop</h2>
      <ul className="flex flex-col gap-3">
        <li className="btn">
          <NavLink to="/dashboard/overview" className="flex gap-3 items-center">
          <GrOverview />
          <p>Overview</p>
          </NavLink>
        </li>
        {
          userData.role === "seller" && sellerRoutes.map((route)=>(
            <li key={route.id} className="btn">
            <NavLink to={route.route} className="flex gap-3 items-center">
            <>{route.icon}</>
            <p>{route.title}</p>
            </NavLink>
          </li>
          ))
        }
        <li className="btn">
          <NavLink to="/" className="flex gap-3 items-center">
          <IoHomeOutline />
          Home
          </NavLink>
        </li>
        <li className="btn  bg-black text-white">
          <button onClick={handleLogout} className="flex gap-3 items-center">
          <FiLogOut />
          Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Dash_Sidebar;