import React from 'react';
import PageTransition from '../components/PageTransition';


const About = () => {
  const features = [
    { title: "AI Diagnosis", desc: "Fasal ki photo kheenchein aur turant bimari ka pata lagayein." },
    { title: "Expert Advice", desc: "Bimari ke hisab se sahi dawai aur upchar ki jankari." },
    { title: "Free for All", desc: "Hamara maksad har kisan tak technology pahunchana hai." }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary/5 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 italic">
          CROP<span className="text-secondary">AI</span> ke Bare Mein
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg font-medium">
          Hum technology aur kheti ko jodh kar kisanon ki zindagi asan banane ka prayas kar rahe hain.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">Hamara Sankalp</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bharat ek krishi-pradhan desh hai, lekin aaj bhi hamare kisan bhai fasalon ki bimariyo ki wajah se nuksan jhelte hain. **CropAI** ek aisa digital sathi hai jo AI (Artificial Intelligence) ki madad se khet mein hi "Doctor" ka kaam karta hai.
            </p>
          </div>
          <div className="bg-primary/10 h-64 rounded-3xl flex items-center justify-center text-6xl">
            🌱
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((item, index) => (
            <div key={index} className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition bg-gray-50">
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default About;