import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Dashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'yesterday' | 'today' | 'past'>('today');

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        {/* Header */}
        <Header doctorName="Dr. Smith" />

        {/* Main Content */}
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Patient Records</h1>

          {/* Tab Buttons for Filtering */}
          <div className="flex space-x-4 mb-6">
            {['yesterday', 'today', 'past'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab as 'yesterday' | 'today' | 'past')}
                className={`px-4 py-2 rounded-lg text-lg ${
                  selectedTab === tab ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Patient Records List */}
          <div className="space-y-4">
            {[15, 16, 19].map((day, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Thu 09:00am - 09:30am</p>
                <p className="font-semibold">Raghav Singh</p>
                <p className="text-gray-600">Issue: Fever</p>
                <div className="mt-2 flex gap-4 text-blue-500">
                  <a href="#">View Documents</a>
                  <a href="#">View Patient Details</a>
                  <a href="#">View Report</a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
