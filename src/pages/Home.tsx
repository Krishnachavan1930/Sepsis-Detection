import React from "react";
import { Users, AlertCircle, ClipboardList, UserCheck } from "lucide-react";
import Navbar from "../components/Navbar"; // Adjust path if necessary
import StatCard from "../components/statCard"; // Adjust path if necessary
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

function HomePage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar hospitalName="Sandip Hospital" />

      {/* Hero Section */}
      <motion.div
        className="relative pt-16"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="absolute inset-0 h-[600px] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Hospital background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-28 sm:py-36">
          <div className="text-center text-white">
            <motion.h1
              className="text-4xl font-extrabold sm:text-5xl md:text-6xl tracking-tight"
              variants={fadeInUp}
            >
              Advanced Sepsis Detection & Monitoring
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Harnessing cutting-edge AI to detect sepsis early, monitor patients in real-time, and save lives with precision and speed.
            </motion.p>

            {/* Dashboard Button */}
            <motion.div className="mt-10" variants={fadeInUp}>
              <Link
                to="/admin"
                className="inline-flex items-center bg-blue-600 text-white py-3 px-8 rounded-xl shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-medium"
              >
                Explore Dashboard
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 -mt-20 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </motion.div>

      {/* Info Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900">
              AI-Powered Sepsis Detection
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our state-of-the-art AI system analyzes vital signs, lab results, and patient data in real-time to identify sepsis risks early, empowering healthcare providers with actionable insights.
            </p>
            <div className="mt-8 space-y-6">
              {[
                "Real-time vital signs monitoring",
                "Early sepsis risk detection",
                "Instant staff notifications",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            variants={fadeInUp}
          >
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Medical monitoring system"
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-blue-700 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Patient Care?
        </h3>
        <Link
          to="/admin"
          className="inline-block bg-white text-blue-700 py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
        >
          Get Started Now
        </Link>
      </motion.div>
    </div>
  );
}

export default HomePage;