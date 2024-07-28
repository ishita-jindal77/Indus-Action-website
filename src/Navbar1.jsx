import React from 'react';
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactNavbar = () => {
  return (
    <div className="bg-black text-white p-3 flex justify-between items-center">
      <div className="flex space-x-8">
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <a href="mailto:info@indusaction.org" className="hover:underline">info@indusaction.org</a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone />
          <a href="tel:0 11 4172 9407" className="hover:underline">+1-234-567-8900</a>
        </div>
      </div>
      <div className="flex space-x-4 mr-10  ">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 ">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 ">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 ">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default ContactNavbar;
