import type React from "react"
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Youtube } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Short Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/placeholder.svg?height=40&width=40" alt="SepsisDetect Logo" className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold">SepsisDetect</span>
            </div>
            <p className="text-sm text-gray-400">
              SepsisDetect helps hospitals and doctors efficiently manage patient data and detect sepsis risks using
              AI-driven analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Dashboard", "Patient Management", "Sepsis Reports", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <span className="text-sm">123 HealthCare Street, New York, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <span className="text-sm">+1 123-456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <span className="text-sm">support@sepsisdetect.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-500" />
                <span className="text-sm">Mon - Fri, 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Terms */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} SepsisDetect. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition duration-300">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

