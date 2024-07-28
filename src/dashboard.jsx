import React from 'react';


const Dashboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 gap-4" style={{ width: 'fit-content' }}>
        <button className="p-6 bg-white rounded shadow hover:bg-gray-100">Button 1</button>
        <button className="p-6 bg-white rounded shadow hover:bg-gray-100">Button 2</button>
        <button className="p-6 bg-white rounded shadow hover:bg-gray-100">Button 3</button>
        <button className="p-6 bg-white rounded shadow hover:bg-gray-100">Button 4</button>
      </div>
    </div>

  );
};

export default Dashboard;
