import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, Search, User, X, Home, Users, Info, Phone } from "lucide-react";
import { NavbarProps, NotificationType } from "../types";

const Navbar: React.FC<NavbarProps> = ({ hospitalName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifications: NotificationType[] = [
    { id: 1, message: "URGENT: High sepsis risk detected - Patient in Ward 3", time: "2 min ago", severity: "high" },
    { id: 2, message: "New sepsis assessment required - Room 201", time: "10 min ago", severity: "medium" },
    { id: 3, message: "Patient vitals updated - Low risk status", time: "15 min ago", severity: "low" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Hospital Name */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">{hospitalName}</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/doctors" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Doctors</span>
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Search, Notifications & Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search patients..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 rounded-full hover:bg-gray-100 relative"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  3
                </span>
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex items-start">
                          <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                            notification.severity === "high" ? "bg-red-500" :
                            notification.severity === "medium" ? "bg-yellow-500" : "bg-green-500"
                          }`} />
                          <div className="ml-3">
                            <p className="text-sm text-gray-800">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="p-2 rounded-full hover:bg-gray-100">
                <User className="h-5 w-5 text-gray-600" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">View Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</Link>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Logout</button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input type="text" placeholder="Search patients..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <Link to="/" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">Home</Link>
            <Link to="/doctors" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">Doctors</Link>
            <Link to="/about" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
