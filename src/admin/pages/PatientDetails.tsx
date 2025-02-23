import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for navigation

// Patient Data Type
interface Patient {
  name: string;
  issue: string;
  riskLevel: "Emergency" | "Critical" | "High" | "Moderate" | "Low";
  time: string;
  image: string;
  stats: {
    heartRate: number;
    oxygenLevel: number;
    bloodPressure: string;
    temperature: number;
  };
}

// Sample Patient Data
const patients: Patient[] = [
  { name: "Raghav Singh", issue: "Low oxygen & low heart rate", riskLevel: "Emergency", time: "11:04 PM", image: "https://randomuser.me/api/portraits/men/1.jpg", stats: { heartRate: 50, oxygenLevel: 85, bloodPressure: "90/60", temperature: 98.6 }},
  { name: "Sneha Kapoor", issue: "Dizziness & nausea", riskLevel: "Emergency", time: "11:12 PM", image: "https://randomuser.me/api/portraits/women/12.jpg", stats: { heartRate: 55, oxygenLevel: 88, bloodPressure: "95/60", temperature: 97.8 }},
  { name: "Amruta Pillai", issue: "Low blood pressure", riskLevel: "Critical", time: "11:04 PM", image: "https://randomuser.me/api/portraits/women/2.jpg", stats: { heartRate: 72, oxygenLevel: 96, bloodPressure: "80/50", temperature: 98.2 }},
  { name: "Ramesh Iyer", issue: "Low hemoglobin", riskLevel: "Critical", time: "11:13 PM", image: "https://randomuser.me/api/portraits/men/11.jpg", stats: { heartRate: 70, oxygenLevel: 92, bloodPressure: "100/65", temperature: 98.5 }},
  { name: "Sushmita Singh", issue: "Blood pressure increase", riskLevel: "High", time: "11:04 PM", image: "https://randomuser.me/api/portraits/women/3.jpg", stats: { heartRate: 78, oxygenLevel: 97, bloodPressure: "140/90", temperature: 99.1 }},
  { name: "Karan Mehta", issue: "High pulse rate", riskLevel: "High", time: "11:10 PM", image: "https://randomuser.me/api/portraits/men/9.jpg", stats: { heartRate: 110, oxygenLevel: 94, bloodPressure: "130/85", temperature: 98.7 }},
  { name: "Suresh Sharma", issue: "High body temperature", riskLevel: "Moderate", time: "11:05 PM", image: "https://randomuser.me/api/portraits/men/4.jpg", stats: { heartRate: 90, oxygenLevel: 95, bloodPressure: "120/80", temperature: 101.3 }},
  { name: "Bhumika Jadhav", issue: "Body temperature increasing", riskLevel: "Moderate", time: "11:06 PM", image: "https://randomuser.me/api/portraits/women/5.jpg", stats: { heartRate: 88, oxygenLevel: 96, bloodPressure: "118/78", temperature: 100.5 }},
  { name: "Priya Nair", issue: "Dehydration symptoms", riskLevel: "Moderate", time: "11:11 PM", image: "https://randomuser.me/api/portraits/women/10.jpg", stats: { heartRate: 85, oxygenLevel: 97, bloodPressure: "115/75", temperature: 98.1 }},
  { name: "Ankita Tonde", issue: "New patient", riskLevel: "Low", time: "11:07 PM", image: "https://randomuser.me/api/portraits/women/6.jpg", stats: { heartRate: 72, oxygenLevel: 98, bloodPressure: "120/80", temperature: 98.4 }},
  { name: "Daksh Das", issue: "Body temperature change", riskLevel: "Low", time: "11:08 PM", image: "https://randomuser.me/api/portraits/men/7.jpg", stats: { heartRate: 76, oxygenLevel: 97, bloodPressure: "119/79", temperature: 98.9 }},
  { name: "Ayush Jha", issue: "Body temperature change", riskLevel: "Low", time: "11:09 PM", image: "https://randomuser.me/api/portraits/men/8.jpg", stats: { heartRate: 75, oxygenLevel: 97, bloodPressure: "118/76", temperature: 99.0 }}
];

const riskColors: Record<string, string> = {
  "Emergency": "bg-red-600",
  "Critical": "bg-red-400",
  "High": "bg-orange-500",
  "Moderate": "bg-yellow-400",
  "Low": "bg-green-400",
};

const IndoorPatients: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [sortOrder, setSortOrder] = useState<"highToLow" | "lowToHigh">("highToLow");
  const navigate = useNavigate(); // Added for navigation

  const sortedPatients = [...patients].sort((a, b) => {
    const riskOrder = { "Emergency": 1, "Critical": 2, "High": 3, "Moderate": 4, "Low": 5 };
    return sortOrder === "highToLow" 
      ? riskOrder[a.riskLevel] - riskOrder[b.riskLevel]
      : riskOrder[b.riskLevel] - riskOrder[a.riskLevel];
  });

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => prevOrder === "highToLow" ? "lowToHigh" : "highToLow");
  };

  const handleBackClick = () => {
    navigate("/dashboard"); // Navigate to main dashboard
  };

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center p-6">
      <div className="flex justify-between items-center w-full max-w-screen-xl mb-6">
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          onClick={handleBackClick}
        >
          ← Back
        </button>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h2 className="text-2xl font-bold text-gray-800">Available Indoor Patients</h2>
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={toggleSortOrder}
          >
            Sort: {sortOrder === "highToLow" ? "High → Low" : "Low → High"}
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            🔔
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            👨‍⚕️
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {sortedPatients.map((patient, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md w-full cursor-pointer"
            onClick={() => setSelectedPatient(patient)}
          >
            <div className="flex items-center gap-3">
              <img src={patient.image} alt={patient.name} className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-semibold">{patient.name}</h3>
                <p className="text-sm text-gray-600">{patient.issue}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-gray-500">{patient.time}</span>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${riskColors[patient.riskLevel]}`}>{patient.riskLevel}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold">{selectedPatient.name} - Health Stats</h3>
            <p>Heart Rate: {selectedPatient.stats.heartRate} bpm</p>
            <p>Oxygen Level: {selectedPatient.stats.oxygenLevel}%</p>
            <p>Blood Pressure: {selectedPatient.stats.bloodPressure}</p>
            <p>Temperature: {selectedPatient.stats.temperature}°F</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg" onClick={() => setSelectedPatient(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndoorPatients;