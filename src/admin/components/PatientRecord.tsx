import React from "react";
import { Clock, User, MoreVertical } from "lucide-react";

interface PatientRecordProps {
  date: string;
  day: number;
  time: string;
  patientName: string;
  issue: string;
  hasDocuments?: boolean;
}

const PatientRecord: React.FC<PatientRecordProps> = ({
  date,
  day,
  time,
  patientName,
  issue,
  hasDocuments,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-gray-600 text-sm">{date}</p>
            <p className="text-2xl font-semibold">{day}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">{time}</span>
            </div>

            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{patientName}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">Issue: {issue}</span>
            </div>

            {hasDocuments && (
              <button className="text-blue-500 text-sm hover:underline">
                View Documents
              </button>
            )}

            <button className="text-blue-500 ml-4 text-sm hover:underline">
              {" "}
              View Patient Details{" "}
            </button>
            <button className="text-blue-500 ml-4 text-sm hover:underline">
              {" "}
              View Report{" "}
            </button>
          </div>
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default PatientRecord;
