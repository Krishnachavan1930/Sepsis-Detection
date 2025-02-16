import React from 'react';
import { LayoutDashboard, Calendar, UserCircle, HelpCircle, LogOut, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-black text-white p-6">
      <div className="flex items-center gap-2 mb-8">
        <Heart className="w-8 h-8" />
        <span className="text-xl font-semibold">Health Care</span>
      </div>
      
      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="flex items-center gap-3 p-3 bg-[#2A9D8F] rounded-lg">
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/admin/calendar" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
          <Calendar className="w-5 h-5" />
          <span>Calendar</span>
        </Link>
        
        <Link to="/admin/profile" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
          <UserCircle className="w-5 h-5" />
          <span>Profile</span>
        </Link>
        
        <Link to="/admin/help" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
          <HelpCircle className="w-5 h-5" />
          <span>Help</span>
        </Link>
      </nav>
      
      <div className="absolute bottom-6 left-6">
        <button className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;