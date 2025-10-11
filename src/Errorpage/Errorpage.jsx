import React from 'react';
import errorImg from '../assets/error-404.png'
import { NavLink } from 'react-router';

const Errorpage = () => {
    return (
        <div>
            <div className='my-20'>
                <img className='mx-auto w-[400px]' src={errorImg} alt="" />
                <h1 className='font-bold text-[40px] text-center'>Oops, page not found!</h1>
                <p className='text-center mt-2 text-gray-500'>The page you are looking for is not available.</p>
                <NavLink>
                    
                    <div className='flex justify-center items-center mt-5'>
                <button className='btn px-16 font-bold bg-gradient-to-b from-indigo-600 to-indigo-300 text-white transition-transform duration-300 transform hover:scale-105'>Go Back !</button>
            </div>
                </NavLink>
                
            </div>
            
        </div>
    );
};

export default Errorpage;<h1>Page not found</h1>