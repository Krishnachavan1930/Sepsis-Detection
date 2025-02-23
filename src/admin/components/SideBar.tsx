import { FaUserMd, FaUser, FaFileMedical, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white text-gray-900 flex flex-col justify-between shadow-md border-r">
      {/* Sidebar Header */}
      <div>
        <h2 className="text-2xl font-bold p-6 text-center border-b">Admin Panel</h2>
        <ul className="space-y-3 mt-4 px-4">
          <li>
            <Link to="/admin/dashboard" className="flex items-center gap-4 p-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition">
              <FaUserMd className="text-xl" /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/add-patient" className="flex items-center gap-4 p-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition">
              <FaFileMedical className="text-xl" /> <span>Add Patient</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/patient-details" className="flex items-center gap-4 p-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition">
              <FaUser className="text-xl" /> <span>Patient Details</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/profile" className="flex items-center gap-4 p-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition">
              <FaUser className="text-xl" /> <span>Profile</span>
            </Link>
          </li>
          
          <Link to="/admin/help" className="flex items-center gap-4 p-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition">
          <FaQuestionCircle className="text-xl text-blue-500" /> <span>Help</span>
          </Link>

        </ul>
      </div>

      {/* Logout Button at the Bottom */}
      <div className="p-4 border-t">
        <button className="flex items-center gap-4 p-4 text-lg font-semibold text-red-500 rounded-lg hover:bg-red-100 transition w-full">
          <FaSignOutAlt className="text-xl" /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
