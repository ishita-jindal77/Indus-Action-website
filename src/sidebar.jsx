import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-700 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">NGO</h1>
      <ul>
        <li className="mb-2"><a href="#!" className="block p-2 rounded hover:bg-slate-700 ">Home</a></li>
        <li className="mb-2"><a href="#!" className="block p-2 rounded hover:bg-slate-700">Application tracking</a></li>
        <li className="mb-2"><a href="#!" className="block p-2 rounded hover:bg-slate-700">Schemes</a></li>
        <li className="mb-2"><a href="#!" className="block p-2 rounded hover:bg-slate-700"></a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
