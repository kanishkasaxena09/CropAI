import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="bg-white border-b p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={isLoggedIn ? "/home" : "/"} className="text-2xl font-black text-primary italic">
          CROP<span className="text-secondary">AI</span>
        </Link>

        <div className="flex items-center space-x-6">
          {/* Agar user Login hai, tabhi ye links dikhao */}
          {isLoggedIn ? (
            <>
              <div className="hidden md:flex space-x-6 font-bold text-gray-600">
                <Link to="/home" className="hover:text-primary">Home</Link>
                <Link to="/scan" className="hover:text-primary">Scan</Link>
                <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
              
                <Link to="/weather" className="hover:text-primary">Weather</Link>
                <Link to="/contact" className="hover:text-primary">Contact Us</Link>
                
              </div>
              <Link to="/profile" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-xl border border-primary/20">
                👨‍🌾
              </Link>
            </>
          ) : (
            /* Agar user Splash par hai ya login nahi hai, toh sirf Join button dikhao */
            <Link to="/signup" className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;