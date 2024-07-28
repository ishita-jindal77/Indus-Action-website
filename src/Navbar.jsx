import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone,FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleContact = () => {
        setShowContact(!showContact);
    };

    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold ml-0 ">
                    <img className="" src='https://www.indusaction.org/wp-content/themes/indusaction/img/logo.svg' alt="Logo" />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                <div className={`md:flex ${isOpen ? "block" : "hidden"} text-xl font-mono`}>
                    <a href="https://www.indusaction.org/" className="block md:inline-block mt-4 md:mt-0 text-black mr-20 font-medium">About</a>
                    <Link to="/sop">
                    <button className="block md:inline-block mt-4 md:mt-0 text-black mr-20 font-medium">SOP</button>
                    </Link>
                    <div className="relative">
                        <button onClick={toggleContact} className="block md:inline-block mt-4 md:mt-0 text-black mr-20 font-medium ">Contact</button>
                        
                        {showContact && (
                            <div className="absolute right-0 mt-2 py-2 w-48  border rounded shadow-xl bg-slate-700 ">
                                <a href="tel:0 11 4172 9407" className=" text-sm block px-4 py-2 text-white bg-slate-700"> <FaPhone/>0 11 4172 9407</a>
                                <a href="mailto:info@indusaction.org" className="text-sm block px-4 py-2 text-white bg-slate-700"><FaEnvelope/> info@indusaction.org</a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="block md:inline-block mt-4 md:mt-0 text-black mr-20 font-medium">Home</a>
                   
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
