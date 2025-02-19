import { useState } from 'react';
import { Doctor } from '../types/doctor';
import { DoctorCard } from '../components/DoctorCard';

const specialties = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist"
];

const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "Dr. Richard James",
    specialty: "General physician",
    imageUrl: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
    available: true
  },
  {
    id: 2,
    name: "Dr. Emily Larson",
    specialty: "Gynecologist",
    imageUrl: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    available: true
  },
  {
    id: 3,
    name: "Dr. Sarah Patel",
    specialty: "Dermatologist",
    imageUrl: "https://img.freepik.com/free-photo/medium-shot-doctor-with-crossed-arms_23-2148868316.jpg",
    available: true
  },
  {
    id: 4,
    name: "Dr. Christopher Lee",
    specialty: "Pediatricians",
    imageUrl: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg",
    available: true
  }
];

export const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const filteredDoctors = selectedSpecialty
    ? doctorsData.filter(doctor => doctor.specialty === selectedSpecialty)
    : doctorsData;

  return (
    <div className="min-h-screen bg-gray-50 p-12 mt-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Browse through the doctors specialist.
        </h1>

        {/* Specialties sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            {specialties.map(specialty => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty === selectedSpecialty ? null : specialty)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors
                  ${specialty === selectedSpecialty 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white hover:bg-blue-50 text-gray-700'
                  }`}
              >
                {specialty}
              </button>
            ))}
          </div>

          {/* Doctors grid */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};