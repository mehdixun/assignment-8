import React from 'react';
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='bg-white'>
          <div className="navbar  mb-20 max-w-[1200px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <li>
          
          <ul className="p-2">
            <li><a>Home</a></li>
            <li><a>Apps</a></li>
            <li><a>Instalation</a></li>
          </ul>
        </li>
        
      </ul>
    </div>
    <a className="text-xl flex items-center">
        <img className='h-[40px] w-[40px]' src={logoImg} alt="" />
        <h3 className='text-indigo-600 font-bold ml-1'>HERO.IO</h3>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><a>Home</a></li>
      <li>
        <a>Apps</a>
      </li>
      <li><a>Instalation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/' className="btn px-6 bg-gradient-to-b from-indigo-600 to-indigo-300 text-white"><FaGithub />
 Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;