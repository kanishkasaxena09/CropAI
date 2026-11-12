import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-black text-primary">CROP<span className="text-secondary">AI</span></Link>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Kisanon ki unnati ke liye ek kadam. AI ke saath apni fasal ko surakshit rakhein aur zyada paidavar payein.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-sm font-bold">
            <Link to="/about" className="hover:text-secondary transition">About</Link>
            <Link to="/terms" className="hover:text-secondary transition text-secondary">Terms</Link> {/* ✅ Naya Link */}
            <Link to="/help" className="hover:text-secondary transition">Help</Link>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition">Farming Tips</a></li>
              <li><a href="#" className="hover:text-primary transition">Organic Fertilizers</a></li>
              <li><a href="#" className="hover:text-primary transition">Weather Updates</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6">Contact Support</h4>
            <p className="text-sm text-gray-600 mb-2">Kaithal, Haryana, India</p>
            <p className="text-sm text-primary font-bold">support@cropai.com</p>
            <div className="flex space-x-4 mt-6">
              {/* Simple Social Icons Placeholder */}
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer">f</div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer">t</div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer">in</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-8 text-center">
          <p className="text-gray-400 text-xs italic">
            &copy; 2026 CropAI - Made with ❤️ for Indian Farmers by Techvengers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;