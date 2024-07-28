import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default to admin
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const response = await fetch('http://your-backend-url/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, role }),
    });

    if (response.ok) {
      const data = await response.json();
      // Handle successful login
      navigate('/dashboard');
    } else {
      // Handle login failure
      setError('Invalid login credentials');
    }
  };

  return (
    <div id="login" className="flex justify-center items-center min-h-screen border-sky-100  rounded-xl">
      <div className="rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl text-white font-bold mb-4 text-center">LOGIN</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-white">Username</label>
            <input
              type="text"
              className="mt-1 p-1 w-full border rounded"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-white">Password</label>
            <input
              type="password"
              className="mt-1 p-1 w-full border rounded"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Login as</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={handleRoleChange}
                className="mr-2"
              />
              <label htmlFor="admin" className="mr-4 text-white">Admin</label>
              <input
                type="radio"
                id="flw"
                name="role"
                value="flw"
                checked={role === 'flw'}
                onChange={handleRoleChange}
                className="mr-2"
              />
              <label htmlFor="flw" className="text-white">FLW</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-yellow-600 text-black rounded hover:bg-yellow-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
