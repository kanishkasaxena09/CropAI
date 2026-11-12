import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PageTransition from '../components/PageTransition';

const Dashboard = () => {
  const [stats, setStats] = useState({ total: 0, healthy: 0, unhealthy: 0 });
  const [scanHistory, setScanHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/get-scans");
        setStats({
          total: response.data.total,
          healthy: response.data.healthy,
          unhealthy: response.data.unhealthy
        });
        setScanHistory(response.data.history);
      } catch (error) {
        console.error("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  return (
    <PageTransition>
    <div className="min-h-screen bg-background py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-primary">Kisan Dashboard</h1>
            <p className="text-gray-500 italic">Aapki fasalon ki sehat ka asali hisab-kitab.</p>
          </div>
          <Link to="/scan" className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition transform">
            + New Scan
          </Link>
        </div>

        {/* Stats Summary - Now Dynamic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Total Scans</p>
            <h3 className="text-4xl font-black text-primary mt-2">{stats.total}</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Sick Crops</p>
            <h3 className="text-4xl font-black text-orange-600 mt-2">{stats.unhealthy}</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Healthy Crops</p>
            <h3 className="text-4xl font-black text-green-600 mt-2">{stats.healthy}</h3>
          </div>
        </div>

        {/* Recent History Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden text-left">
          <div className="p-6 border-b border-gray-50">
            <h2 className="text-xl font-bold text-gray-800 italic">Live History Logs</h2>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <p className="p-10 text-center font-bold text-gray-400">Loading your farm data...</p>
            ) : (
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-4 text-xs font-bold text-gray-400 uppercase">Detection ID</th>
                    <th className="p-4 text-xs font-bold text-gray-400 uppercase">Disease Name</th>
                    <th className="p-4 text-xs font-bold text-gray-400 uppercase">Confidence</th>
                    <th className="p-4 text-xs font-bold text-gray-400 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {scanHistory.map((scan) => (
                    <tr key={scan.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-gray-700">SCAN-{scan.id}</td>
                      <td className="p-4 text-gray-800 font-bold italic">{scan.disease}</td>
                      <td className="p-4 text-primary font-black">{scan.confidence}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                          scan.disease.toLowerCase().includes('healthy') 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                        }`}>
                          {scan.disease.toLowerCase().includes('healthy') ? 'Good' : 'Treatment Needed'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Dashboard;