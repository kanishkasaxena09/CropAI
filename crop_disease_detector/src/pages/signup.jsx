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
          <div className="text-5xl mb-4">⚠️</div>
          <h3 className="text-2xl font-black text-gray-800 mb-2">Rukiye lala!</h3>
          <p className="text-gray-600 font-medium mb-6">{message}</p>
          <button onClick={onClose} className="w-full bg-red-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95">Theek Hai</button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Signup = ({ setIsLoggedIn }) => {
  
  const [formData, setFormData] = useState({ name: '', email: '', password: '', city: '', state: '', otp: '' });
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ open: false, message: '' });
  
  const navigate = useNavigate();

  const sendOtp = async () => {
    if (!formData.email) return setModal({ open: true, message: 'Pehle email toh dalo lala!' });
    setLoading(true);
    try {
      await axios.post("http://127.0.0.1:8000/send-otp", { email: formData.email });
      setOtpSent(true);
    } catch (err) {
      setModal({ open: true, message: 'OTP nahi gaya.' });
    } finally { setLoading(false); }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/signup", formData);

      if (response.status === 200) {
       
        localStorage.setItem("userName", formData.name);
        localStorage.setItem("userCity", formData.city);
        localStorage.setItem("userState", formData.state);
        localStorage.setItem("isLoggedIn", "true");

        setIsLoggedIn(true); 
        navigate('/home'); 
      }
    } catch (err) {
      setModal({ open: true, message: err.response?.data?.detail || "Phle se account bna hua h!" });
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 font-sans">
      <CustomModal isOpen={modal.open} message={modal.message} onClose={() => setModal({ open: false, message: '' })} />

      <div className="bg-white p-10 rounded-[40px] shadow-xl w-full max-w-md border border-gray-100 text-center">
        <h2 className="text-4xl font-black text-green-800 italic mb-8">Naya <span className="text-green-500">Khaata</span></h2>
        
        <form onSubmit={handleSignup} className="space-y-4">
          <input type="text" placeholder="Poora Naam" className="w-full p-4 bg-gray-50 border rounded-2xl font-bold outline-none focus:border-green-500 transition-all text-center" onChange={(e)=>setFormData({...formData, name: e.target.value})} required />
          
          <div className="flex gap-2">
            <input type="email" placeholder="Email Address" className="flex-1 p-4 bg-gray-50 border rounded-2xl font-bold outline-none focus:border-green-500 transition-all text-center" onChange={(e)=>setFormData({...formData, email: e.target.value})} required />
            <button type="button" onClick={sendOtp} className="bg-green-100 text-green-700 px-5 rounded-2xl font-black text-xs hover:bg-green-700 hover:text-white transition-all shadow-sm">OTP</button>
          </div>

          {/* City & State Inputs */}
          <div className="flex gap-2">
            <input type="text" placeholder="Shehar (City)" className="w-1/2 p-4 bg-gray-50 border rounded-2xl font-bold outline-none focus:border-green-500 text-center" onChange={(e)=>setFormData({...formData, city: e.target.value})} required />
            <input type="text" placeholder="Rajya (State)" className="w-1/2 p-4 bg-gray-50 border rounded-2xl font-bold outline-none focus:border-green-500 text-center" onChange={(e)=>setFormData({...formData, state: e.target.value})} required />
          </div>

          {otpSent && (
            <motion.input initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} type="text" placeholder="6-digit OTP" className="w-full p-4 bg-yellow-50 border-2 border-yellow-200 rounded-2xl font-black text-center tracking-widest outline-none" onChange={(e)=>setFormData({...formData, otp: e.target.value})} maxLength="6" required />
          )}

          <input type="password" placeholder="Password" className="w-full p-4 bg-gray-50 border rounded-2xl font-bold outline-none focus:border-green-500 transition-all text-center" onChange={(e)=>setFormData({...formData, password: e.target.value})} required />
          
          <button type="submit" disabled={!otpSent || loading} className={`w-full py-5 rounded-2xl font-black transition-all shadow-lg text-lg ${otpSent ? 'bg-green-700 text-white hover:bg-green-800 active:scale-95' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
            {loading ? "Rukiye..." : "Account Banayein 🌱"}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 font-bold text-sm">
          Pehle se account hai? <Link to="/login" className="text-green-600 italic font-black underline ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;