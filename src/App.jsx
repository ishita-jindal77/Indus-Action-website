import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registrationuser from './Registrationformuser';
import Registrationflw from './Registrationformflw';
import ThankYou from './Thankyou';
import Navbar from './Navbar';
import SOPSection from './SOP';
import ContactNavbar from './Navbar1';
import Login from './loginpage'; // Import Login component
import Chatbot from './chatbot'; // Import Chatbot component

const DashboardLayout = () => {
  const [showRegistrationUser, setShowRegistrationUser] = useState(true);

  const toggleForm = () => {
    setShowRegistrationUser(!showRegistrationUser);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <ContactNavbar />
              <Navbar />
              <p className="text-6xl font-thin text-white bg-gradient-to-r from-slate-800 via-slate-900 to-black animate-pulse flex items-center justify-center p-6">
                Committed to making sustainable changes!
              </p>

              <div className="bg-slate-800 flex flex-row justify-center items-start">
                <div className="w-full max-w-lg">
                  {showRegistrationUser ? (
                    <Registrationuser toggleForm={toggleForm} />
                  ) : (
                    <Registrationflw toggleForm={toggleForm} />
                  )}
                </div>
                <div className="w-full max-w-lg ml-20">
                  <Login />
                </div>
              </div>
            </>
          } />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/sop" element={<SOPSection />} />
        </Routes>
        <Chatbot /> {/* Add Chatbot component here */}
      </div>
    </Router>
  );
};

export default DashboardLayout;
