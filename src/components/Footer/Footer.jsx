import React from 'react';
import logoImg from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
          <div className='w-[300px] '>
            <div className='flex gap-2 items-center'>
              <img className='h-[60px] w-[60px]' src={logoImg} alt="" />
              <h1 className='font-bold text-5xl my-2'>HERO.IO </h1>
              
            </div>
            <p className=''>At HERO.IO, we design and build innovative apps that make everyday life smarter and easier. Our mission is to transform ideas into digital experiences that people love and trust.</p>
            </div>
  <nav className='mx-auto'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='mx-auto'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='mx-auto'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;