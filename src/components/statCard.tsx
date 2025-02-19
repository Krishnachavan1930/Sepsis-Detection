import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border m-11 border-gray-200 p-6 mt-16">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-50 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-blue-600">{value}</span>
            <span className="text-sm text-gray-500">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
