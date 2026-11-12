import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const CustomModal = ({ isOpen, message, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-white p-8 rounded-[30px] shadow-2xl max-w-sm w-full text-center border-t-8 border-red-500">
          <div className="text-5xl mb-4">❌</div>
          <h3 className="text-2xl font-black text-gray-800 mb-2">Login Galti!</h3>
          <p className="text-gray-600 font-medium mb-6">{message}</p>
          <button onClick={onClose} className="w-full bg-red-600 text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-all">Theek Hai</button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ open: false, message: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/login", { email, password });

      if (response.status === 200) {
        // save in browser memory
        localStorage.setItem("userName", response.data.user.name);
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("userCity", response.data.user.city);  
        localStorage.setItem("userState", response.data.user.state);
        localStorage.setItem("isLoggedIn", "true");

        setIsLoggedIn(true);
        navigate('/home'); 
      }
    } catch (error) {
      setModal({ open: true, message: error.response?.data?.detail || "Email ya Password galat hai lala!" });
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 font-sans">
      <CustomModal isOpen={modal.open} message={modal.message} onClose={() => setModal({ open: false, message: '' })} />
      <div className="bg-white p-10 rounded-[40px] shadow-xl w-full max-w-md border border-gray-100">
        <h2 className="text-4xl font-black text-green-800 italic text-center mb-10">Wapas <span className="text-green-500">Aaye</span></h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border rounded-2xl py-4 px-6 focus:border-green-500 outline-none font-bold text-left" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full bg-gray-50 border rounded-2xl py-4 px-6 focus:border-green-500 outline-none font-bold text-left" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading} className="w-full bg-green-700 hover:bg-green-800 text-white font-black py-4 rounded-2xl shadow-lg active:scale-95 transition-all text-center">
            {loading ? "Rukiye..." : "Dashboard Kholiye 🚀"}
          </button>
        </form>
        <p className="mt-8 text-center text-gray-500 font-bold">Naya Account? <Link to="/signup" className="text-green-600 italic font-black underline">Banayein</Link></p>
      </div>
    </div>
  );
};

export default Login;