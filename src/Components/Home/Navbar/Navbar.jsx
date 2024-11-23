import { BsCartCheck, BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { VscHeart } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import UserDropDown from "./UserDropDown";
import useAuth from "../../../Hooks/useAuth";
import useUserData from "../../../Hooks/useUserData";

const Navbar = () => {
  const { user } = useAuth();
 const userData = useUserData();

  return (
    <div className="navbar lato-font uppercase font-medium text-gray-700 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="space-x-10 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="text-gray-700 hover:text-[#FB5D5D]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-700 hover:text-[#FB5D5D]">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="text-gray-700 hover:text-[#FB5D5D]">
              <Link to="/aboutus">about us</Link>
            </li>
            <li className="text-gray-700 hover:text-[#FB5D5D]">
              <Link>contact us</Link>
            </li>
          </ul>
        </div>
        <img src="https://i.ibb.co.com/NFst3vX/logo-2.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-10 menu-horizontal px-1">
          <li className="text-gray-700 hover:text-[#FB5D5D]">
            <a>Home</a>
          </li>
          <li className="text-gray-700 hover:text-[#FB5D5D]">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="text-gray-700 hover:text-[#FB5D5D]">
            <Link to="/aboutus">about us</Link>
          </li>
          <li className="text-gray-700 hover:text-[#FB5D5D]">
            <a>contact us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2 lg:gap-5 items-center">
        {user ? (
          <div className="">
            {" "}
            <UserDropDown />{" "}
          </div>
        ) : (
          <Link to="/login" href="#" className="font-semibold text-[#fb5d5d]">
            Sign in
          </Link>
        )}
        <BsSearch className="text-gray-700 hover:text-[#fb5d5d]" size={20} />
        <div className="relative inline-block">
          <VscHeart className="text-gray-700 hover:text-[#fb5d5d]" size={24} />
          <span className="badge badge-secondary absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            {userData?.wishlist?.length}
          </span>
        </div>
        <BsCartCheck className="text-gray-700 hover:text-[#fb5d5d]" size={22} />
      </div>
    </div>
  );
};

export default Navbar;
