import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import DateFilter from "../components/DataFilter";
import PatientRecord from "../components/PatientRecord";

const Dashboard: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Today");

  const patientRecords = [
    {
      date: "Thu",
      day: 15,
      time: "09:00am - 09:30am",
      patientName: "Raghav Singh",
      issue: "Fever",
      hasDocuments: true,
    },
    {
      date: "Fri",
      day: 16,
      time: "09:00am - 09:30am",
      patientName: "Raghav Singh",
      issue: "Fever",
      hasDocuments: true,
    },
    {
      date: "Mon",
      day: 19,
      time: "09:00am - 09:30am",
      patientName: "Raghav Singh",
      issue: "Fever",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Header doctorName="Dr.Smith" />

        <main className="p-6">
          <DateFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="space-y-4">
            {patientRecords.map((record, index) => (
              <PatientRecord key={index} {...record} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
