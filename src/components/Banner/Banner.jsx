import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import heroImg from '../../assets/hero.png'
import googlePlay from '../../assets/GooglePlay.png'
import appStore from '../../assets/AppStore.png'



const Banner = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-7xl mb-10 lg:mb-2 font-bold text-gray-800'>We Build <br /> <span className='bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent'>Productive</span> Apps
            </h1>
            <p className='text-gray-500 mt-5 my-2'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 justify-center items-center my-8 mb-10 lg:mb-5'>
                <a href="https://play.google.com/store/games?hl=en"><button className='btn border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:bg-indigo-500 hover:text-white px-5 py-5 bg-white text-black'> <img className='w-[30px]' src={googlePlay} alt="" /> 
 Google Play</button></a>
                <a href="https://www.apple.com/app-store/"><button className='btn border border-gray-200 px-7 py-5 hover:border transition-transform duration-300 transform hover:scale-105 hover:bg-indigo-500 hover:text-white bg-white text-black'> <img className='w-[30px]' src={appStore} alt="" />
 App Store</button></a>
            </div>

            <div className='mt-10'>
                <img className='mx-auto w-[700px]' src={heroImg} alt="" />
            </div>

            <div className='bg-gradient-to-b from-indigo-500 to-indigo-400 lg:h-[320px] p-10 mb-10'>
            <h2 className='font-bold text-5xl text-white text-center'>Trusted by Millions, Built for You</h2>

            <div className='flex flex-col lg:flex-row justify-evenly items-center my-8 text-white'>
                <div className=''>
                    <p className='text-gray-300  font-semibold text-center'>Total Downloads</p>
                    <h2 className=' font-bold text-[64px]'>29.6M</h2>
                    <p className='text-gray-300 font-semibold text-center'>21% more than last month</p>
                </div>
                <div>
                    <p className='text-gray-300 font-semibold text-center'>Total Reviews</p>
                    <h2 className='mb-2 font-bold text-[64px]'>906K</h2>
                    <p className='text-gray-300 font-semibold text-center'>46% more than last month</p>
                </div>
                <div>
                    <p className='text-gray-300 font-semibold text-center'>Active Apps</p>
                    <h2 className='mb-2 font-bold text-[64px]'>132+</h2>
                    <p className='text-gray-300 font-semibold text-center'>31 more will Launch</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;