import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '', role: '' });

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login credentials:', credentials);
    // You can add logic for handling login here
    setCredentials({ username: '', password: '', role: '' });
    //redirect to home page
    window.open("/" , "_self");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
      <h1 className="text-3xl font-bold mb-4 text-white">Login</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-200 text-sm font-bold mb-2 text-white">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 text-white">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2 text-white">Role</label>
          <select
            id="role"
            name="role"
            value={credentials.role}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>Select a role</option>
            <option value="superadmin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="ZoneManager">Zone Manager</option>
            <option value="BazarManager">Bazar Manager</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
