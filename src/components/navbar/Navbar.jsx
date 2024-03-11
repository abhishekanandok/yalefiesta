import React from 'react';
import Link from 'next/link';
import { handleLogout } from "@/lib/action";
import { ModeToggle } from "@/components/darkMode"

const Navbar = () => {
  return (
    <nav className="pt-2 pb-2 text-indigo-800 sticky top-0 bg-white">
      
      <div className="flex space-x-9 ml-44 mr-44 items-center">
        {/* Logo and Name */}
        <div className="flex items-center flex-1">
          <img src="/yaleFiesta.svg" alt="yF Logo" className="mr-2" style={{ width: '75px', height: '75px' }} />
          <CustomLink href="/">
            <span className="font-bold text-2xl cursor-pointer">yaleFiesta</span>
          </CustomLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 flex-1">
          <NavLink href="/">HOME</NavLink>

          <NavLinkWithDropdown title="EVENTS" href="/events">
            <DropdownItem href="/events/upcomming">Up Comming</DropdownItem>
            <DropdownItem href="/events/current">Current</DropdownItem>
            <DropdownItem href="/events/past">PAST</DropdownItem>
          </NavLinkWithDropdown>

          <NavLink href="/results">RESULTS</NavLink>

          <NavLinkWithDropdown title="TEAM" href="/team">
            <DropdownItem href="/team/developer">Developer</DropdownItem>
            <DropdownItem href="/team/coordinator">Coordinator</DropdownItem>
          </NavLinkWithDropdown>

          <NavLink href="/blog">BLOG</NavLink>

          <NavLinkWithDropdown title="ABOUT" href="/about">
            <DropdownItem href="/about">About Us</DropdownItem>
            <DropdownItem href="/about/gallery">Gallery</DropdownItem>
            <DropdownItem href="/about/faq">FAQ</DropdownItem>
            <DropdownItem href="/about/sponsors">Sponsors</DropdownItem>
          </NavLinkWithDropdown>
          <NavLink href="/contact">CONTACT</NavLink>
        </div>

        <ModeToggle/>

        {/* Login Button */}
        <CustomLink href="/login">
          <span className="cursor-pointer items-end flex-1 text-xl  bg-blue-900 hover:bg-blue-500 text-white p-1 pl-3 pr-3 rounded-lg">LOGIN</span>
        </CustomLink>
        <form action={handleLogout}>
              <button >Logout</button>
        </form>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <CustomLink href={href}>
      <span className="hover:underline cursor-pointer text-md flex-1">{children}</span>
    </CustomLink>
  );
};

const NavLinkWithDropdown = ({ title, href, children }) => {
  return (
    <div className="relative group">
      <CustomLink href={href} className="hover:underline cursor-pointer text-md flex-1">
        {title}
      </CustomLink>
      <div className="absolute hidden space-y-2 bg-white group-hover:block border border-gray-200 p-2 rounded-md">
        {children}
      </div>
    </div>
  );
};


const DropdownItem = ({ href, children }) => {
  return (
    <CustomLink href={href}>
      <span className="block text-gray-700 px-4 py-2 hover:bg-gray-100 cursor-pointer">{children}</span>
    </CustomLink>
  );
};

const CustomLink = ({ href, children }) => {
  return (
    <Link href={href}>
      {/* You can replace the <a> tag with any custom component handling navigation */}
      <span>{children}</span>
    </Link>
  );
};

export default Navbar;
