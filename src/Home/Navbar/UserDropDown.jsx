import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const UserDropDown = () => {
  const {user, logout} = useAuth();

  const handleLogout= () =>{
    logout();
  }
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className=" m-1">
  <div className="avatar">
  <div className="w-7  rounded-full">
    <img src={`${user?.photoURL || "/person.png" }`} />
  </div>
</div>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-2">
    <li>
      <NavLink to='/dashboard/overview'>Dashboard</NavLink>
    </li>
    <li>
    <button onClick={handleLogout} className="btn bg-black text-white btn-sm border border-gray-500">Logout</button>
    </li>
  </ul>
</div>
  );
};

export default UserDropDown;