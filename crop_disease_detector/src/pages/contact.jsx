import React, { useState } from 'react';
import axios from 'axios';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //sending message to backed
      const response = await axios.post("http://127.0.0.1:8000/contact", formData);
      if (response.status === 200) {
        alert("Dhanyawad lala! Apka sandesh humein mil gaya hai.");
        setFormData({ name: '', email: '', message: '' }); // Form clear kar do
      }
    } catch (err) {
      alert("Maafi chahte hain, sandesh nahi ja paya!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
    <div className="min-h-screen bg-white animate-page-in">
      <div className="bg-primary/5 py-16 px-6 text-center border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 italic">
          Sampark <span className="text-secondary">Karein</span>
        </h1>
        <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.3em]">We are here to help you</p>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Humein Yahan Dhundein</h2>
          
          <div className="flex items-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:scale-[1.02] transition shadow-sm">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mr-6">📍</div>
            <div>
              <h4 className="font-black text-gray-800">Hamara Pata</h4>
              <p className="text-gray-500 text-sm">RBMI College, ITBP, Bareilly, Uttar Pradesh</p>
            </div>
          </div>

          <div className="flex items-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:scale-[1.02] transition shadow-sm">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mr-6">📞</div>
            <div>
              <h4 className="font-black text-gray-800">Phone Number</h4>
              <p className="text-gray-500 text-sm">+91 9027943523</p>
            </div>
          </div>

          <div className="flex items-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:scale-[1.02] transition shadow-sm">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mr-6">✉️</div>
            <div>
              <h4 className="font-black text-gray-800">Email Address</h4>
              <p className="text-gray-500 text-sm">testweb0925@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Apna Sawal Likhein</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Aapka Naam" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
              className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary/20 transition" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
              className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary/20 transition" 
            />
            <textarea 
              placeholder="Message..." 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4" 
              required 
              className="w-full p-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary/20 transition"
            ></textarea>
            <button 
              disabled={loading}
              className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-primary/30 hover:bg-opacity-90 transition active:scale-95"
            >
              {loading ? "Bhej raha hoon..." : "Sandesh Bhejein"}
            </button>
          </form>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Contact;