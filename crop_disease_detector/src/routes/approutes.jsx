import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages Import (Path check kar lena)
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import Scan from '../pages/scan';
import Login from '../pages/login';
import Signup from '../pages/signup';
import NotFound from '../pages/notfound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/scan" element={<Scan />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Agar koi galat URL daale toh 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;