import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, Globe, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Univoc</h3>
            <p className="text-gray-400">
              Empowering the future through innovative education and industry
              collaboration.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-gray-400 hover:text-white">
                  DVOC & BVOC
                </Link>
              </li>
              <li>
                <Link
                  to="/job-portal"
                  className="text-gray-400 hover:text-white"
                >
                  Job Seva Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-8448373884</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-011-43504632</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Info@univoc.co.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>www.univoc.co.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61565893847420&mibextid=ZbWKwL" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/univocfoundation?igsh=MXN0aWRlcjNrM2NiNQ==" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/univocc/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://x.com/Univoc272586?t=NXnOf5m8VFe1G6coGzx7Cw&s=08" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Univoc Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
