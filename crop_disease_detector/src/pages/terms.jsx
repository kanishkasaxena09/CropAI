import React from 'react';
import PageTransition from '../components/PageTransition';

const Terms = () => {
  const sections = [
    {
      title: "1. App ka Istemal",
      content: "CropAI sirf kisanon ki madad ke liye banayi gayi hai. Iska istemal kisi bhi galat ya gair-kanooni kaam ke liye na karein."
    },
    {
      title: "2. AI Prediction",
      content: "Hamara AI models par adharit hai. Hum koshish karte hain ki result sahi ho, lekin dawai chidkne se pehle kisi expert ki salah zarur lein."
    },
    {
      title: "3. User Data",
      content: "Aapka data (jaise photos aur location) sirf fasal ki bimari pehchanne aur app ko behtar banane ke liye use kiya jayega."
    },
    {
      title: "4. Account Suraksha",
      content: "Apna password kisi ke sath share na karein. Aapka account aapki zimmedari hai."
    }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-white py-16 px-6 animate-page-in">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-primary italic mb-4">Terms & Conditions</h1>
          <p className="text-gray-500 font-medium italic underline decoration-secondary">Niyam aur Shartein</p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-[30px] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-8 bg-primary/5 rounded-3xl border border-dashed border-primary/20 text-center">
          <p className="text-gray-500 text-sm italic">
            App ka istemal karte waqt aap in sabhi niyamon se sehmat hain.
          </p>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Terms;