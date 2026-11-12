import React, { useState } from 'react';
import axios from 'axios'; 
import PageTransition from '../components/PageTransition';

const Scan = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileToUpload, setFileToUpload] = useState(null); 
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [apiResult, setApiResult] = useState(null); 
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileToUpload(file); 
      setSelectedImage(URL.createObjectURL(file)); 
      setShowResult(false);
      setApiResult(null);
    }
  };

  const startScan = async () => {
    if (!fileToUpload) return;

    setIsScanning(true);
    setShowResult(false);

    
    const formData = new FormData();
    formData.append('file', fileToUpload);

    try {
     
      const response = await axios.post("http://127.0.0.1:8000/predict", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      
      setApiResult(response.data);
      setIsScanning(false);
      setShowResult(true);
    } catch (error) {
      console.error("Scan error:", error);
      alert("Backend se sampark nahi ho pa raha lala!");
      setIsScanning(false);
    }
  };

  return (
    <PageTransition>
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-green-950 italic tracking-tighter">
            AI <span className="text-primary">Detection</span>
          </h1>
          <p className="text-green-900/60 font-black uppercase text-[10px] tracking-[0.4em] mt-2">
            Asaliyat ka pata lagayein
          </p>
        </div>

        {/*Main Scan Area */}
        <div className="bg-white/40 backdrop-blur-xl rounded-[50px] border border-white p-8 shadow-2xl overflow-hidden mb-8">
          <div className="flex flex-col items-center justify-center min-h-[350px] border-4 border-dashed border-green-900/10 rounded-[40px] relative overflow-hidden">
            
            {!selectedImage ? (
              <div className="text-center p-10">
                <div className="text-7xl mb-6">🌿</div>
                <label className="bg-primary text-white px-10 py-4 rounded-full font-black text-lg cursor-pointer shadow-xl shadow-primary/20 hover:scale-105 transition inline-block">
                  Photo Chunnein
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>
              </div>
            ) : (
              <div className="w-full h-full p-4 flex flex-col items-center">
                <div className="relative w-full max-w-sm aspect-square rounded-[35px] overflow-hidden shadow-2xl border-4 border-white">
                  <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                  
                  {isScanning && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-full h-1.5 bg-primary absolute top-0 animate-scan-line shadow-[0_0_20px_#4ade80]"></div>
                      <p className="text-white font-black text-xl italic drop-shadow-lg animate-pulse">Scanning...</p>
                    </div>
                  )}
                </div>

                {!isScanning && !showResult && (
                  <button 
                    onClick={startScan}
                    className="mt-8 bg-green-950 text-white px-12 py-4 rounded-2xl font-black text-lg shadow-xl active:scale-95 transition"
                  >
                    Analysis Shuru Karein
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Result Section */}
        {showResult && apiResult && (
          <div className="animate-page-in space-y-6 mb-10">
            <div className="bg-green-900 text-white p-8 rounded-[40px] shadow-2xl border border-white/20 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-white/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">Report</span>
                  <span className="text-secondary font-black text-2xl">{apiResult.confidence} Match</span>
                </div>
                
                <h2 className="text-3xl font-black italic mb-4">{apiResult.disease}</h2>
                <p className="text-green-100/80 font-medium mb-6 leading-relaxed italic text-sm">
                  {apiResult.message} {/* message from backend */}
                </p>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-[30px] border border-white/10">
                  <h3 className="text-secondary font-black uppercase text-xs tracking-widest mb-2">Doctor's Advice</h3>
                  <p className="text-white font-bold">
                    Kripya is bimari ke liye nazdiki kisan kendra se sampark karein ya mitti ki jaanch karwayein.
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => {setSelectedImage(null); setFileToUpload(null); setShowResult(false);}}
              className="w-full py-4 text-green-900 font-black uppercase tracking-widest text-[10px] hover:bg-green-100 rounded-2xl transition border border-green-900/10"
            >
              Naya Scan Karein
            </button>
          </div>
        )}

        {/* Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white/60 p-6 rounded-[35px] border border-gray-100 flex items-start space-x-4 shadow-sm">
            <span className="text-2xl">💡</span>
            <div className="space-y-1">
              <span className="text-primary font-black uppercase tracking-widest text-[10px]">Step 01</span>
              <p className="text-[12px] font-bold text-green-950/70 leading-relaxed italic">
                Photo dhoop mein khinchein taaki AI results ekdum sahi aayein.
              </p>
            </div>
          </div>
          <div className="bg-white/60 p-6 rounded-[35px] border border-gray-100 flex items-start space-x-4 shadow-sm">
            <span className="text-2xl">🌿</span>
            <div className="space-y-1">
              <span className="text-secondary font-black uppercase tracking-widest text-[10px]">Step 02</span>
              <p className="text-[12px] font-bold text-green-950/70 leading-relaxed italic">
                Bimari wale hisse ko focus mein rakhein. Saaf photo hi upload karein.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </PageTransition>
  );
};

export default Scan;