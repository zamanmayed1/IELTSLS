// src/components/ContextModal.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaVoicemail, FaUser, FaNewspaper, FaCog } from "react-icons/fa";

const ContextModal = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose(); // Close modal on link click
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow-md"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing the modal
      >
        <div className="mt-4 grid grid-cols-3 justify-around gap-4">
          <Link className="border m-1 p-4" to="/" onClick={handleLinkClick} title="Home">
            <FaHome className="w-8 h-8 text-blue-500" />
          </Link>
          <Link className="border m-1 p-4" to="/library" onClick={handleLinkClick} title="Library">
            <FaBook className="w-8 h-8 text-blue-500" />
          </Link>
          <Link className="border m-1 p-4" to="/vocabvault" onClick={handleLinkClick} title="Vocabulary">
            <FaVoicemail className="w-8 h-8 text-blue-500" />
          </Link>
          <Link className="border m-1 p-4" to="/dashboard" onClick={handleLinkClick} title="Profile">
            <FaUser className="w-8 h-8 text-blue-500" />
          </Link>
          <Link className="border m-1 p-4" to="/dashboard/feed" onClick={handleLinkClick} title="Feed">
            <FaNewspaper className="w-8 h-8 text-blue-500" />
          </Link>
          <Link className="border m-1 p-4" to="/dashboard/settings" onClick={handleLinkClick} title="Settings">
            <FaCog className="w-8 h-8 text-blue-500" />
          </Link>
        </div>
     
      </div>
    </div>
  );
};

export default ContextModal;
