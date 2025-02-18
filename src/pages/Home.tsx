import React from "react";
import { Users, AlertCircle, ClipboardList, UserCheck } from "lucide-react";
import Navbar from "../components/Navbar"; // Adjust the path if necessary
import StatCard from "../components/statCard"; // Adjust the path if necessary
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar hospitalName="Sandip Hospital" />

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 h-[500px] bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Advanced Sepsis Detection & Monitoring
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Leveraging AI technology to detect sepsis early and save lives
              through continuous patient monitoring and real-time alerts.
            </p>

            {/* Dashboard Button */}
            <div className="mt-8">
              <Link
                to="/admin" // Adjust this route if necessary
                className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <StatCard
            title="Total Patients"
            value={1234}
            icon={<Users className="w-6 h-6 text-blue-600" />}
            description="Currently Admitted"
          />
          <StatCard
            title="High Risk Patients"
            value={23}
            icon={<AlertCircle className="w-6 h-6 text-red-600" />}
            description="Requiring Attention"
          />
          <StatCard
            title="Pending Reports"
            value={45}
            icon={<ClipboardList className="w-6 h-6 text-yellow-600" />}
            description="To be Reviewed"
          />
          <StatCard
            title="Active Staff"
            value={89}
            icon={<UserCheck className="w-6 h-6 text-green-600" />}
            description="Doctors & Nurses"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              AI-Powered Sepsis Detection
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our advanced AI algorithms continuously monitor patient vital
              signs and lab results to detect early signs of sepsis, enabling
              faster intervention and better outcomes.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <p className="text-gray-600">
                  Real-time monitoring of vital signs
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <p className="text-gray-600">
                  Early warning system for sepsis risk
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <p className="text-gray-600">
                  Instant notifications to medical staff
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src="/placeholder.svg?height=384&width=512"
              alt="Medical monitoring system"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
