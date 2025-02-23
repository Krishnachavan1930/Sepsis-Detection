import { FaEnvelope, FaPhone, FaQuestionCircle } from "react-icons/fa";

const Help = () => {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <FaQuestionCircle className="text-blue-500" /> Help & Support
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Need assistance? We're here to help! If you have any questions or issues, please reach out to us using the contact details below.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <p className="text-lg flex items-center gap-3">
          <FaEnvelope className="text-blue-500" /> <span>Email: support@adminpanel.com</span>
        </p>
        <p className="text-lg flex items-center gap-3 mt-2">
          <FaPhone className="text-green-500" /> <span>Phone: +1 (234) 567-890</span>
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <details className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <summary className="text-lg font-semibold cursor-pointer">How do I add a new patient?</summary>
          <p className="text-gray-700 mt-2">To add a new patient, navigate to the "Add Patient" section and fill out the required details.</p>
        </details>
        <details className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <summary className="text-lg font-semibold cursor-pointer">How can I update patient records?</summary>
          <p className="text-gray-700 mt-2">Go to "Patient Details," select a patient, and click "Edit" to update their records.</p>
        </details>
        <details className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <summary className="text-lg font-semibold cursor-pointer">Who can I contact for urgent help?</summary>
          <p className="text-gray-700 mt-2">For urgent issues, call our support team at +1 (234) 567-890.</p>
        </details>
      </div>
    </div>
  );
};

export default Help;
