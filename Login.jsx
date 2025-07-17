import React from "react";

const Login = () => (
  <div className="max-w-sm mx-auto mt-20 p-4 border rounded shadow">
    <h2 className="text-2xl mb-4">Login</h2>
    <input type="text" placeholder="Username" className="w-full mb-3 p-2 border rounded" />
    <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
    <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
  </div>
);

export default Login;