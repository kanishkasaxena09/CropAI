import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const Profile = ({ setIsLoggedIn }) => {
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [userPhoto, setUserPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // pick from browser memory
    const name = localStorage.getItem('userName');
    const city = localStorage.getItem('userCity');
    const state = localStorage.getItem('userState');
    const savedPhoto = localStorage.getItem('userPhoto');
    
    if (name) setUserName(name);
    if (city && state) setUserLocation(`${city}, ${state}`);
    
    
    if (savedPhoto && savedPhoto !== "null") {
      setUserPhoto(savedPhoto);
    }
  }, []);

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      
      reader.onloadend = async () => {
        const base64 = reader.result;
        
       
        setUserPhoto(base64);
        localStorage.setItem('userPhoto', base64);

        // save in db
        try {
          const email = localStorage.getItem('userEmail');
          await axios.put("http://127.0.0.1:8000/update-photo", {
            email: email,
            photo: base64
          });
          console.log("Photo SQL mein save ho gayi lala!");
        } catch (error) {
          console.error("Photo save nahi ho payi:", error);
          alert("Database mein photo save nahi hui!");
        } finally {
          setLoading(false);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.clear(); 
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handlePhotoChange} 
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="bg-white rounded-[40px] shadow-lg overflow-hidden border border-gray-100"
        >
          {/* Header Cover */}
          <div className="h-32 bg-green-700 relative text-left">
            <div className="absolute -bottom-12 left-8">
              <div 
                onClick={() => !loading && fileInputRef.current.click()} 
                className={`w-24 h-24 bg-green-100 rounded-[30px] border-4 border-white flex items-center justify-center shadow-md overflow-hidden cursor-pointer hover:opacity-80 transition-all ${loading ? 'animate-pulse' : ''}`}
              >
                {userPhoto ? (
                  <img src={userPhoto} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl text-green-700">👤</span>
                )}
              </div>
              <p className="text-[10px] font-black text-green-800 mt-14 ml-2 uppercase tracking-tighter cursor-pointer">
                {loading ? "Saving..." : "Change Photo"}
              </p>
            </div>
          </div>

          <div className="pt-20 pb-10 px-8 text-left">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-black text-green-950 italic tracking-tighter">
                  {userName || 'Kisan Bhai'}
                </h1>
                <p className="text-gray-400 font-bold mt-1 uppercase text-xs tracking-widest">
                  Verified Member 
                </p>
              </div>
              <button 
                onClick={handleLogout} 
                className="bg-red-50 text-red-600 px-6 py-2 rounded-2xl font-black text-sm hover:bg-red-600 hover:text-white transition-all shadow-sm"
              >
                Logout
              </button>
            </div>

            {/* User Info Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-[30px] border border-gray-100">
                <p className="text-[10px] font-black text-green-700 uppercase mb-1 tracking-widest">Status</p>
                <p className="font-bold text-gray-800 italic">Active Farmer </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-[30px] border border-gray-100">
                <p className="text-[10px] font-black text-green-700 uppercase mb-1 tracking-widest">Location</p>
                <p className="font-bold text-gray-800 italic">{userLocation || 'Not Set'}</p>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8">
              <button 
                onClick={() => navigate('/home')} 
                className="w-full bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg hover:bg-green-800 transition-all active:scale-95"
              >
                Ghar Wapas Chalein 
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;