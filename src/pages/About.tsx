import React from "react";
import Navbar from "../components/Navbar";
import { Brain, Activity, Shield, Building2, Users, Award } from "lucide-react";
import { motion } from "framer-motion"; // For animations

const AboutPage: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar hospitalName="Sandip Hospital" />

      {/* Hero Section */}
      <motion.div
        className="pt-16 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 relative"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="absolute inset-0 h-full">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Healthcare technology background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center text-white">
          <motion.h1
            className="text-4xl font-extrabold sm:text-5xl md:text-6xl tracking-tight"
            variants={fadeInUp}
          >
            About Our Mission
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Pioneering AI-driven sepsis detection to transform healthcare and save lives with precision and innovation.
          </motion.p>
        </div>
      </motion.div>

      {/* Sepsis Detection Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900">
              Our Sepsis Detection System
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Harnessing AI to enhance early detection and improve patient outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Algorithm",
                text: "Advanced machine learning models trained on vast medical datasets to pinpoint early sepsis indicators.",
              },
              {
                icon: Activity,
                title: "Real-time Monitoring",
                text: "Continuous, live analysis of patient vitals for instant risk assessment.",
              },
              {
                icon: Shield,
                title: "Early Prevention",
                text: "Proactive alerts empower staff to act before sepsis escalates.",
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Hospital Information */}
      <motion.section
        className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900">Sandip Hospital</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                A premier healthcare institution dedicated to excellence through innovative technology and compassionate care.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, title: "State-of-the-art Facility" },
                  { icon: Users, title: "Expert Medical Staff" },
                ].map(({ icon: Icon, title }, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300"
                    variants={fadeInUp}
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              variants={fadeInUp}
            >
              <img
                src="https://images.unsplash.com/photo-1516575150575-8d722c0e06ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Sandip Hospital Building"
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Development Team */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              The minds behind our Dipex Hackathon 2025 innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Atharva Narendra Bhole",
                role: "Lead Developer",
                expertise: "Specialized in AI/ML implementation and system architecture",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Krishna Panditrao Chavan",
                role: "Frontend Developer",
                expertise: "Expert in UI/UX design and responsive web development",
                image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Kalpesh Bhausahab Ghodekar",
                role: "Backend Developer",
                expertise: "Focused on system integration and database management",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
            ].map(({ name, role, expertise, image }, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{name}</h3>
                <p className="mt-2 text-blue-600 font-medium">{role}</p>
                <p className="mt-4 text-sm text-gray-600">{expertise}</p>
              </motion.div>
            ))}
          </div>

          {/* Project Recognition */}
          <motion.div className="mt-16 text-center" variants={fadeInUp}>
            <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg">
              <Award className="w-5 h-5 mr-2" />
              <p className="font-semibold">Dipex Hackathon Project 2025</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage; 