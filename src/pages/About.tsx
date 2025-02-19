import Navbar from "../components/Navbar";
import { Brain, Activity, Shield, Building2, Users, Award } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar hospitalName="Sandip Hospital" />

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl">About Our Mission</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Leveraging cutting-edge AI technology to revolutionize sepsis
            detection and save lives
          </p>
        </div>
      </div>

      {/* Sepsis Detection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Sepsis Detection System
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI-powered early detection system for improved patient
              outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Algorithm",
                text: "Machine learning models trained on extensive medical data to identify early sepsis indicators.",
              },
              {
                icon: Activity,
                title: "Real-time Monitoring",
                text: "Continuous analysis of vital signs and patient data for immediate risk assessment.",
              },
              {
                icon: Shield,
                title: "Early Prevention",
                text: "Proactive alerts enable medical staff to intervene before sepsis becomes critical.",
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Information */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Sandip Hospital
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                A leading healthcare institution committed to providing
                exceptional patient care through innovative medical solutions
                and advanced technology.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, title: "State-of-the-art Facility" },
                  { icon: Users, title: "Expert Medical Staff" },
                ].map(({ icon: Icon, title }, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-3"
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                    <h4 className="font-semibold">{title}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=384&width=512"
                alt="Sandip Hospital Building"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Dipex Hackathon Project Development Team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Atharva Narendra Bhole",
                role: "Lead Developer",
                expertise:
                  "Specialized in AI/ML implementation and system architecture",
              },
              {
                name: "Krishna Panditrao Chavan",
                role: "Frontend Developer",
                expertise:
                  "Expert in UI/UX design and responsive web development",
              },
              {
                name: "Kalpesh Bhausahab Ghodekar",
                role: "Backend Developer",
                expertise:
                  "Focused on system integration and database management",
              },
            ].map(({ name, role, expertise }, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {name}
                </h3>
                <p className="mt-2 text-gray-600">{role}</p>
                <p className="mt-4 text-sm text-gray-500">{expertise}</p>
              </div>
            ))}
          </div>

          {/* Project Recognition */}
          <div className="mt-16 text-center">
            <div className="inline-block px-6 py-3 bg-blue-50 rounded-full">
              <p className="text-blue-600 font-semibold">
                Dipex Hackathon Project 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
