import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageTransition from '../components/PageTransition';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "8548cc84fe5de74a467fe3a1e351488c"; 

  useEffect(() => {
    const fetchFullWeather = async () => {
      const userCity = localStorage.getItem('userCity') || "Bareilly";
      const userState = localStorage.getItem('userState') || "Uttar Pradesh";

      try {
        setLoading(true);
        
        
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=metric&appid=${API_KEY}&lang=hi`
        );

       
        const currentData = res.data.list[0];

       //forecast
        const dailyData = res.data.list.filter((reading, index) => index % 8 === 0).map(item => ({
          day: new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' }),
          temp: Math.round(item.main.temp) + "°",
          icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`
        }));

        setWeather({
          temp: Math.round(currentData.main.temp),
          condition: currentData.weather[0].description,
          location: `${res.data.city.name}, ${userState}`,
          humidity: currentData.main.humidity + "%",
          wind: (currentData.wind.speed * 3.6).toFixed(1) + " km/h",
          clouds: currentData.clouds.all + "%",
          icon: currentData.weather[0].icon
        });

        setForecast(dailyData);
        setLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setError("Mausam ki jankari nahi mil payi lala!");
        setLoading(false);
      }
    };

    fetchFullWeather();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-black text-green-800 animate-pulse italic">Mausam ki khabar la raha hoon... ☁️</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600 font-bold">{error}</div>;

  return (
    <PageTransition>
      <div className="relative w-full max-w-6xl mx-auto mt-24 bg-white/5 backdrop-blur-md rounded-[50px] p-10 shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-green-900/10 font-sans overflow-hidden group">
        
        <img 
          src="src/assets/images/weather.jfif" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30"
        />

        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT SECTION */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-900/10 border border-green-900/20 text-green-900 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
              Live Monitoring
            </div>
            
            <div className="py-4">
              <h1 className="text-[10rem] font-black tracking-tighter italic leading-none text-green-950 drop-shadow-sm">
                {weather.temp}<span className="text-green-700 text-6xl not-italic ml-2">°C</span>
              </h1>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 text-green-900">
              <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="icon" className="w-20 h-20" />
              <div>
                <h2 className="text-3xl font-bold capitalize">{weather.condition}</h2>
                <p className="text-green-800 font-medium tracking-wide">{weather.location}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex-[1.4] w-full space-y-12">
            
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-black/10 backdrop-blur-2xl rounded-[35px] p-6 border border-green-900/10 flex flex-col items-center justify-center text-center">
                <span className="text-green-900/50 text-[11px] font-black uppercase mb-3 tracking-widest">Badal</span>
                <span className="text-2xl font-black text-green-950">{weather.clouds}</span>
              </div>
              <div className="bg-black/10 backdrop-blur-2xl rounded-[35px] p-6 border border-green-900/10 flex flex-col items-center justify-center text-center">
                <span className="text-green-900/50 text-[11px] font-black uppercase mb-3 tracking-widest">Umas</span>
                <span className="text-2xl font-black text-green-950">{weather.humidity}</span>
              </div>
              <div className="bg-black/10 backdrop-blur-2xl rounded-[35px] p-6 border border-green-900/10 flex flex-col items-center justify-center text-center">
                <span className="text-green-900/50 text-[11px] font-black uppercase mb-3 tracking-widest">Hawa</span>
                <span className="text-2xl font-black text-green-950">{weather.wind}</span>
              </div>
            </div>

            {/* week update */}
            <div className="bg-black/5 backdrop-blur-md rounded-[40px] p-8 border border-green-900/10 shadow-inner">
              <div className="flex justify-between items-center gap-2">
                {forecast.map((item, index) => (
                  <div key={index} className={`flex flex-col items-center flex-1 py-4 rounded-3xl transition-all ${index === 0 ? 'bg-green-900 text-white shadow-xl scale-110' : 'text-green-900'}`}>
                    <span className={`text-[9px] font-black mb-2 ${index === 0 ? 'text-green-100' : 'text-green-900/60 opacity-60'}`}>{item.day}</span>
                    <img src={item.icon} alt="day-icon" className="w-10 h-10 mb-2" />
                    <span className="text-sm font-black">{item.temp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default WeatherCard;