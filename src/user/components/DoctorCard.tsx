import { Doctor } from '../types/doctor';

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
      <img 
        src={doctor.imageUrl} 
        alt={doctor.name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
          <span className={`text-sm ${doctor.available ? 'text-green-500' : 'text-gray-500'}`}>
            {doctor.available ? 'Available' : 'Unavailable'}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.specialty}</p>
      </div>
    </div>
  );
};