import { BsCartCheck, BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { VscHeart } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
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
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="space-x-10 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li className="text-gray-700 hover:text-[#FB5D5D]"><Link>Home</Link></li>
          <li className="text-gray-700 hover:text-[#FB5D5D]">
            <Link>Shop</Link>
          </li>
          <li className="text-gray-700 hover:text-[#FB5D5D]">
            <Link>blogs</Link>
          </li>
          <li className="text-gray-700 hover:text-[#FB5D5D]"><Link>about us</Link></li>
          <li className="text-gray-700 hover:text-[#FB5D5D]"><Link>contact us</Link></li>
        </ul>
      </div>
      <img src="https://i.ibb.co.com/NFst3vX/logo-2.png" alt="" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="space-x-10 menu-horizontal px-1">
        <li className="text-gray-700 hover:text-[#FB5D5D]"><a>Home</a></li>
        <li className="text-gray-700 hover:text-[#FB5D5D]">
            <Link>Shop</Link>
        </li>
        <li className="text-gray-700 hover:text-[#FB5D5D]">
          <Link>Blogs</Link>
        </li>
        <li className="text-gray-700 hover:text-[#FB5D5D]"><a>about us</a></li>
        <li className="text-gray-700 hover:text-[#FB5D5D]"><a>contact us</a></li>
      </ul>
    </div>
    <div className="navbar-end flex gap-2 lg:gap-5 items-center">

      <a href="#" className="font-semibold text-[#fb5d5d]">Sign in</a>
      <BsSearch className="text-gray-700 hover:text-[#fb5d5d]" size={20}/>
      <VscHeart className="text-gray-700 hover:text-[#fb5d5d]" size={24}/>
      <BsCartCheck className="text-gray-700 hover:text-[#fb5d5d]" size={22}/>
    </div>
  </div>
  );
};

export default Navbar;