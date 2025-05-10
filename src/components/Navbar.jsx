import React, { use, useContext } from 'react';
const icon = "https://i.ibb.co.com/n8QVKM09/logo.png"
const logo = "https://i.ibb.co.com/C53dDPQr/logoname.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { BalanceContext } from '../page/BalanceProvider';
import { ToastContainer, toast } from 'react-toastify';


const Navbar = () => {

    


const userIcon = "https://i.ibb.co.com/mCtVwWf7/user.png"
const { balance } = useContext(BalanceContext);
    const  {user , logOut}=use(AuthContext);
    const handleLogOut =()=>{
        toast("You logged out successfully.");
        console.log("user try logout");
        logOut().then(() => {
          
            // alert("")
          }).catch((error) => {
            console.log(error)
          });
          
    }



    return (

<div className="navbar bg-base-100 shadow-sm  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
 <NavLink to="/">Home</NavLink>
                <NavLink to="/bills">Bills</NavLink>
                <NavLink  to="/profile">Profile</NavLink>
      </ul>
    </div>
    <div className='flex items-center gap-2'>
    <img className='lg:w-[8%] hidden lg:block' src={icon} alt=""/>
    <img className='lg:w-[20%] w-[80%]' src={logo} alt=""/>
    </div>
  </div>
  <div className="lg:block hidden lg:gap-3 lg:flex text-gray-600 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/bills">Bills</NavLink>
                <NavLink  to="/profile">Profile</NavLink>
                
                
            </div>
  <div className="navbar-end gap-4 ">

  <details className="dropdown">
  <summary className="btn p-0 w-10 h-10 min-h-0 rounded-full border-0 overflow-hidden">
    <img className="w-full h-full object-cover" src={`${user ? user.photoURL : userIcon}`} alt="User" />
  </summary> 
  <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-64 p-2 shadow-sm mt-2">
    <li>
      <a className="block w-full  text-sm">
        {user && user.displayName }
      </a>
    </li>
    <li>
      <a className="block w-full  text-sm">
        {user && user.email }
      </a>
    </li>
    <li><a className='font-semibold'>Tk: {balance}</a></li>
    <li> <Link onClick={handleLogOut}  className="">LogOut</Link></li>

  </ul>
</details>






   
    <div className=' rounded-2xl py-1 px-3 hidden '>{user && user.email}</div>

    {
        user ? <button onClick={handleLogOut} className="btn btn-primary text-xs w-[20%]">LogOut</button> :  
        <Link to="/auth/login" className="btn btn-primary text-xs w-[20%]">Login</Link>
    }


   
    <Link to="/auth/register" className="btn btn-secondary text-xs w-[30%] ">Register</Link>
    
  </div>
</div>
    );
};

export default Navbar;