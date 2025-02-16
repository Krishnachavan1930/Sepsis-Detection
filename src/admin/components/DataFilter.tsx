import React from "react";

interface DateFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="bg-white rounded-full p-1 inline-flex gap-1 mb-6">
      {["Yesterday", "Today", "Past"].map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-full text-sm ${
            activeFilter === filter
              ? "bg-gray-100 text-gray-900"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default DateFilter;
