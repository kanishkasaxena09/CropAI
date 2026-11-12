import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomModal = ({ isOpen, message, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal Box */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white p-8 rounded-[30px] shadow-2xl max-w-sm w-full text-center border-t-4 border-green-600"
          >
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Dhyan Dein!</h3>
            <p className="text-gray-600 font-medium mb-6">
              {message}
            </p>
            <button 
              onClick={onClose}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-2xl transition-all active:scale-95 shadow-lg"
            >
              OK Samajh Gaya
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;