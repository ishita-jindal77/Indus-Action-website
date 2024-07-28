import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registrationflw = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    region: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/thankyou'); // Navigate to the Thank You page
  };
  const loginalert=()=>{
    alert('Proceed to LOGIN ');

  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" p-6 rounded-lg shadow-lg w-full max-w-2xl border-sky-100 border-2 ml-20">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">REGISTRATION FORM</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center mb-4">
            <label htmlFor="name" className="w-40 text-white font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="username" className="w-40 text-white font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-white rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="password" className="w-40 text-white font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="email" className="w-40 text-white font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="phoneNumber" className="w-40 text-white font-medium">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-6">
            <label htmlFor="region" className="w-40 text-white font-medium">Region</label>
            <input
              type="text"
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <button onClick={loginalert}
            type="submit"
            className="w-full p-3 bg-yellow-600 text-slate-800  font-bold rounded-lg hover:bg-yellow-800 transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
        <div className="text-white ml-24 mt-4">
          <p>  
            <button 
              onClick={toggleForm}
              className="font-bold underline ml-4"
            >
              REGISTER AS USER
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registrationflw;
