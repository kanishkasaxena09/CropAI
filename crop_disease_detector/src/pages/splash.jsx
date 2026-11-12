import React from 'react';
import { useNavigate } from 'react-router-dom';
import splashImg from '../assets/images/splash.jfif'; 
import PageTransition from '../components/PageTransition';

const Splash = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <PageTransition>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 animate-page-in">
      
      <div className="mb-10 w-64 h-64 rounded-full border-4 border-gray-100 flex items-center justify-center overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] bg-white/50 backdrop-blur-sm relative z-20">
        <img 
          src={splashImg} 
          alt="CropAI Splash" 
          
          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" 
        />
        { }
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]"></div>
      </div>

      {/* Text Section  */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-primary italic tracking-tighter mb-4">
          CROP<span className="text-secondary">AI</span>
        </h1>
        <p className="text-gray-500 font-bold text-sm uppercase tracking-[0.2em]">
          Khet ka Doctor, Ab Aapke Haath Mein
        </p>
      </div>
      
      {/* Buttons Section  */}
      <div className="flex flex-col space-y-4 w-full max-w-xs relative z-10">
        
        { }
        <button 
          onClick={() => navigate('/login')} 
          className="bg-primary text-white py-4 rounded-[30px] font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Login Karein
        </button>

        <button 
          onClick={() => navigate('/signup')} 
          className="bg-gray-100 text-gray-800 py-4 rounded-[30px] font-black text-lg hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Naya Account Banayein
        </button>
        
      </div>

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-radial from-primary/5 to-white/5 -z-10 rounded-full blur-[100px]"></div>
    </div>
    </PageTransition>
  );
};

export default Splash;