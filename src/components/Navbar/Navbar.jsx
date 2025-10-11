import React from 'react';
import logoImg from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='bg-white shadow-sm'>
      <div className="navbar mb-20 max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <ul className="p-2 text-gray-700">
                  <li>
                    <NavLink
                      to="/"
                      end
                      className={({ isActive }) =>
                        isActive ? "text-indigo-500 underline font-semibold" : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/allapps"
                      className={({ isActive }) =>
                        isActive ? "text-indigo-500 underline font-semibold" : ""
                      }
                    >
                      Apps
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/installation"
                      className={({ isActive }) =>
                        isActive ? "text-indigo-500 underline font-semibold" : ""
                      }
                    >
                      Installation
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="text-xl flex items-center">
            <img className='h-[40px] w-[40px]' src={logoImg} alt="" />
            <NavLink to='/'>
              <h3 className='text-indigo-500 font-bold ml-1 text-2xl'>HERO.IO</h3>
            </NavLink>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-gray-500 gap-5">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `hover:underline transition-transform duration-300 transform hover:scale-105 ${isActive ? "bg-indigo-500 text-white shadow-md scale-105" : "hover:text-indigo-500"}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/allapps"
                className={({ isActive }) =>
                  `hover:underline transition-transform duration-300 transform hover:scale-105 ${isActive ? "bg-indigo-500 text-white shadow-md scale-105" : "hover:text-indigo-500"}`
                }
              >
                Apps
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  `hover:underline transition-transform duration-300 transform hover:scale-105 ${isActive ? "bg-indigo-500 text-white shadow-md scale-105" : "hover:text-indigo-500"}`
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href='https://github.com/'
            className="btn px-6 bg-gradient-to-b from-indigo-500 to-indigo-300 transition-transform duration-300 transform hover:scale-105  text-white"
          >
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
