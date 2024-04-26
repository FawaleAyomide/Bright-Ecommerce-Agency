/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Nav = () => {
    const [showNavbar, setShowNavbar] =  useState(false);

    const menuShow = () => {
        setShowNavbar(!showNavbar);
    }

  return (
    <>
    <div className='header'>
    <HiMenuAlt3 className="ham-menu" onClick={menuShow} />
      <nav className={showNavbar ? 'slider active' : 'slider'}>
        <Link to={"/"} class="logo">Bright Ecommerce Agency</Link>
        <ul className="nav-links">
          <div className="close-icon">
            <MdClose className="ham-close" onClick={menuShow} />
          </div>
          <li><NavLink className='a' to='/service'>Service</NavLink></li>
          <li><NavLink className='a' to='/pricing'>Pricing</NavLink></li>
          <li><NavLink className='a' to='/about'>About us</NavLink></li>
          <li><NavLink className='a' to='/contact'>Contact us</NavLink></li>
        </ul>
        <div>
        <NavLink to='/getStarted'><button className="btn btn-1">Get Started</button></NavLink>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Nav;
