import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';


import heroImage from '../assets/images/home.jfif'; 

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left animate-page-in">
            <h1 className="text-5xl md:text-7xl font-black text-green-950 leading-tight italic tracking-tighter">
              CROP<span className="text-primary">AI</span>
            </h1>
            
            {/* Tagline waisi hi jaisi pehle thi */}
            <p className="mt-6 text-xl font-bold text-gray-500 max-w-lg leading-relaxed">
              Khet ka Doctor, <br /> 
              <span className="text-green-900/40 uppercase text-sm tracking-[0.3em]">
                Ab Aapke Haath Mein
              </span>
            </p>

            <p className="mt-4 text-gray-400 font-medium text-sm italic">
              AI ki madad se apni fasal ki bimari pehchanein aur turant samadhan payein.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <Link 
                to="/scan" 
                className="bg-primary text-white px-10 py-4 rounded-full font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition transform text-center"
              >
                Scan Karein
              </Link>
              
              <Link 
                to="/dashboard" 
                className="bg-gray-100 text-green-950 px-10 py-4 rounded-full font-black text-lg hover:bg-gray-200 active:scale-95 transition text-center"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Right content */}
          <div className="relative group">
            {/* Background decorative shape */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[50px] transform group-hover:rotate-3 transition-transform duration-700"></div>
            
            <img 
              src={heroImage} 
              alt="Crop AI Home" 
              className="relative rounded-[50px] shadow-2xl object-cover w-full h-[450px] md:h-[550px] border-8 border-white"
            />
            
            {/*badge effect */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[30px] shadow-xl border border-gray-50 hidden md:block animate-bounce">
                <span className="text-3xl">🌿</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-green-900 mt-2">99.9% Secure</p>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Home;