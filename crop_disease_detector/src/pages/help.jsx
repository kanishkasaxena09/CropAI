import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import PageTransition from '../components/PageTransition';

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "CropAI ka istemal kaise karein?",
      answer: "Sabse pehle 'Scan' page par jayein, apni fasal ki photo upload karein, aur hamara AI turant bimari ka pata laga kar upchar batayega."
    },
    {
      question: "Kya ye app kisanon ke liye free hai?",
      answer: "Haan, CropAI ka basic diagnosis aur jankari har kisan ke liye bilkul muft hai."
    },
    {
      question: "Scan karne ke liye kaisi photo honi chahiye?",
      answer: "Koshish karein ki photo saaf ho, roshni achi ho, aur bimari wala hissa (patti ya tana) bilkul beech mein ho."
    },
    {
      question: "Kya ye bina internet ke kaam karega?",
      answer: "Abhi ke liye AI analysis ke liye internet zaruri hai, lekin hum offline features par kaam kar rahe hain."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <PageTransition>
    <div className="min-h-screen bg-white py-16 px-6 animate-page-in">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-black text-primary mb-4 italic">Sahayata Kendra (Help)</h1>
        <p className="text-gray-500 font-medium">Aapke sawal, hamare jawab.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition text-left"
            >
              <span className="font-bold text-gray-800">{faq.question}</span>
              <span className="text-primary font-black">{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-6 bg-white border-t border-gray-100 animate-fadeIn">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/*button*/}
      <div className="mt-20 text-center bg-primary/5 p-10 rounded-[40px] max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Abhi bhi koi sawal hai?</h3>
        <p className="text-gray-500 mb-6 text-sm">Hamari team se seedha sampark karein.</p>
        
        {/* direct contact page */}
        <Link 
          to="/contact" 
          className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 transition hover:bg-opacity-90 active:scale-95"
        >
          Hamse Baat Karein
        </Link>
      </div>
    </div>
    </PageTransition>
  );
};

export default Help;