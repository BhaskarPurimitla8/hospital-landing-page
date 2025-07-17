import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-blue-600">🏥 HealthCare</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-blue-600">Home</Link>
      <Link to="/login" className="hover:text-blue-600">Login</Link>
    </div>
  </nav>
);

export default Navbar;