import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 p-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Subscribe Section */}
        <div className="col-span-full mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p>Enter your email here</p>
          {/* Add your subscription form or button here */}
          <input type="email" placeholder="Your email" className="border p-2 mr-2" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
        </div>

        {/* Services Section */}
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <CustomLink href="/how-to-purchase">How to purchase</CustomLink>
          <CustomLink href="/payment-method">Payment method</CustomLink>
          <CustomLink href="/how-it-works">How it works</CustomLink>
        </div>

        {/* About Section */}
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <CustomLink href="/about-us">We are</CustomLink>
          <CustomLink href="/contact-us">Contact us</CustomLink>
        </div>

        {/* Find Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Find us</h2>
          {/* Add your social media icons or links here */}
          <p>Social Media Links</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

// CustomLink component to handle navigation
const CustomLink = ({ href, children }) => {
  return (
    <Link href={href}>
      {/* You can replace the <a> tag with any custom component handling navigation */}
      <span>{children}</span>
    </Link>
  );
};

export default Footer;
