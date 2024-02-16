import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="pt-2 pb-2 text-indigo-800 sticky top-0 bg-white">
      <div className="flex space-x-9 ml-44 mr-44 items-center">
        {/* Logo and Name */}
        <div className="flex items-center flex-1">
          <img src="/yaleFiesta.svg" alt="yF Logo" className="mr-2" style={{ width: '75px', height: '75px' }} />
          <Link href="/">
            <span className="font-bold text-2xl cursor-pointer">yaleFiesta</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 flex-1">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
          <NavLink href="/speakers">SPEAKERS</NavLink>
          <NavLink href="/schedule">SCHEDULE</NavLink>
          <NavLink href="/blog">BLOG</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </div>

        {/* Login Button */}
        <Link href="/login">
          <span className="cursor-pointer items-end flex-1 text-xl">login</span>
        </Link>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <span className="hover:underline cursor-pointer text-md flex-1">{children}</span>
    </Link>
  );
};

export default Navbar;
