import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  doctorName: string;
  avatarUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ doctorName, avatarUrl }) => {
  return (
    <div className="flex justify-between items-center p-6">
      <h1 className="text-2xl font-semibold">Patient Records</h1>
      
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl || "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150"}
            alt="Doctor avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{doctorName}</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;