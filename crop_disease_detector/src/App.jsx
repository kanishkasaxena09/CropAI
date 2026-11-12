import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';

import Splash from './pages/splash';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Scan from './pages/scan';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Login from './pages/login';
import Signup from './pages/signup';
import Help from './pages/help';
import Terms from './pages/terms';
import Weather from './pages/weather';



import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        
        { }
        <Navbar isLoggedIn={isLoggedIn} />

        <main className="flex-grow">
          <Routes>
            { }
            <Route path="/" element={<Splash setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/welcome" element={<Splash setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/weather" element={<Weather />} />
            
            
            
            {/* Auth Pages */}
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

            { }
            { }
            <Route 
              path="/home" 
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/scan" 
              element={isLoggedIn ? <Scan /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={isLoggedIn ? <Profile setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} 
            />

            { }
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-9xl font-black text-gray-100 italic">404</h1>
                <p className="text-xl font-bold text-gray-400 -mt-8 mb-8">Page nahi mila lala!</p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="bg-primary text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 transition active:scale-95"
                >
                  Ghar Wapas Chalo
                </button>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;