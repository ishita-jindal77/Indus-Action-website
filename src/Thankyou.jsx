// src/ThankYou.jsx
import React from 'react';

import { Link } from 'react-router-dom';
const ThankYou = () => {
  return (
    
        
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-900">
      <div className=" p-6 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h1 className=" font-bold mb-6 text-white text-6xl">Thank You!</h1>
        <p className="text-white text-2xl">We will contact you shortly.</p>
      </div>
      <div>
        <Link to="/">
      <button className="ml-6 mt-10 text-2xl border border-stone-500 bg-yellow-600 rounded-2xl px-4 py-2 font-bold hover:text-sky-200">
       HOME 
      </button>
      </Link>
      </div>
      </div>
   
  );
};

export default ThankYou;
