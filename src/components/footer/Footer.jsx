// components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <SocialLink href="https://twitter.com/yaleFiesta" icon="twitter" />
          <SocialLink href="https://www.facebook.com/yaleFiesta" icon="facebook" />
          <SocialLink href="https://www.instagram.com/yaleFiesta" icon="instagram" />
        </div>

        {/* Copyright */}
        <p>&copy; 2024 yaleFiesta. All rights reserved.</p>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
      <i className={`fab fa-${icon} text-2xl`} />
    </a>
  );
};

export default Footer;
