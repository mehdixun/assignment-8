import React, { Suspense } from 'react';
import Allapp from './App';
import { Link } from 'react-router';

const Allaps = ({data}) => {
    return (
        <div className=''>
            <div className='text-center my-10 mt-20'>
                <h2 className='font-bold text-[48px] text-gray-800'>Trending Apps</h2>
                <p className='text-gray-500 mt-1'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
            <Suspense fallback={<span>Apps are loading..</span>}>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4 gap-y-8 max-w-[1200px] mx-auto'>
                {
                data.map((allApp) => <Allapp key={allApp.id} allApp={allApp}></Allapp>)
            }
            </div>
            <div className='text-center my-10 mb-20'>
                <Link to='/allapps'>
                <button className='btn px-16 font-bold bg-gradient-to-b from-indigo-600 to-indigo-300 text-white transition-transform duration-300 transform hover:scale-105'>Show All</button>
                </Link>
            </div>
            </Suspense>
        </div>
    );
};

export default Allaps;