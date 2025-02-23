import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaQuestionCircle, FaSearch, FaComments } from "react-icons/fa";

const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "How do I add a new patient?",
      answer: "Navigate to the 'Add Patient' section in the dashboard, fill out the required fields such as name, medical issue, and vital stats, then click 'Save'.",
    },
    {
      question: "How can I update patient records?",
      answer: "Go to 'Patient Details' from the main menu, select the patient from the list, click 'Edit', update the necessary information, and save the changes.",
    },
    {
      question: "Who can I contact for urgent help?",
      answer: "For urgent issues, reach out to our support team directly at +1 (234) 567-890 or use the live chat feature below.",
    },
    {
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page, enter your email, and follow the instructions sent to your inbox to reset your password.",
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 p-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3 animate-fade-in">
          <FaQuestionCircle className="text-blue-600" /> Help & Support
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get quick answers to your questions or contact our support team. We're here to assist you 24/7!
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Support</h2>
        <div className="flex flex-col gap-4">
          <p className="text-lg flex items-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <span className="text-gray-700">Email: <a href="mailto:support@adminpanel.com" className="text-blue-600 hover:underline">support@adminpanel.com</a></span>
          </p>
          <p className="text-lg flex items-center gap-3">
            <FaPhone className="text-green-500" />
            <span className="text-gray-700">Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></span>
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <span className="text-blue-500">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              </details>
            ))
          ) : (
            <p className="text-gray-600 italic">No matching FAQs found.</p>
          )}
        </div>
      </div>

      {/* Live Chat Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
        onClick={() => alert("Live chat feature coming soon!")}
      >
        <FaComments className="text-xl" />
        <span>Live Chat</span>
      </button>
    </div>
  );
};

export default Help;