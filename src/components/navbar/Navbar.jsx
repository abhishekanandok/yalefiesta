// components/Navbar.jsx
import styles from "./navbar.module.css"
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" pt-7 pb-7">
      <div className="container flex items-center  ml-44 mr-44">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img src="/yaleFiesta.svg" alt="yF Logo" className="mr-2" style={{ width: '72px', height: '72px' }} />
          <Link href="/">
            <span className=" text-indigo-800 font-bold text-3xl cursor-pointer">yaleFiesta</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
          <NavLink href="/speakers">SPEAKERS</NavLink>
          <NavLink href="/schedule">SCHEDULE</NavLink>
          <NavLink href="/blog">BLOG</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </div>

        {/* Login Button */}
        <Link href="/login">
          <span className="text-indigo-800 cursor-pointer">login</span>
        </Link>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <span className="text-indigo-800 hover:underline cursor-pointer text-xl">{children}</span>
    </Link>
  );
};

export default Navbar;
