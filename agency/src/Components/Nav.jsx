/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
    const [showNavbar, setShowNavbar] =  useState(false);

  return (
    <>
    <div className='header'>
      <nav
        className="navbar navbar-expand 
        navbar-light bg-light"
      >
        <Link to={"/"} class="logo">Bright Ecommerce Agency</Link>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home
            <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Nav;
