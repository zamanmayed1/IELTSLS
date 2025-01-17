import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const profiledata = useSelector(e => e.profiledata.mydata)
  const location = useLocation(); // Get the current location

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const isActive = (path) => location.pathname === path;


  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50 bold">
      <div className=" container mx-auto px-4 flex justify-between items-center py-3">
        <div className="flex items-center ">
          <Link
            to="/">
          <img className="w-36" src="/mainlogo.png" alt="IELTS LS" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-gray-700 hover:text-gray-900 ${
              isActive("/") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/library"
            className={`text-gray-700 hover:text-gray-900 ${
              isActive("/library") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            Library
          </Link>
          <Link
            to="/vocabvault"
            className={`text-gray-700 hover:text-gray-900 ${
              isActive("/vocabvault") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            Vocab Vault
          </Link>
          <Link
            to="/courses"
            className={`text-gray-700 hover:text-gray-900 ${
              isActive("/courses") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            Courses
          </Link>
          <Link
            to="/private-batch"
            className={`text-gray-700 hover:text-gray-900 ${
              isActive("/private-batch") ? "border-b-2 border-blue-600" : ""
            }`}
          >
            Batch's
          </Link>
        </div>
        {/* <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Link
              onClick={toggleDrawer}
              to={"/dashboard"}
              className="focus:outline-none"
            >
              <img
                className="w-10 h-10 p-1 rounded-full border"
                src={profiledata.profilePhoto}
                alt={profiledata.name}
                title={profiledata.name}
              />
            </Link>
          </div>
        </div> */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-white p-4 shadow-lg z-50">
            <div className="flex justify-between items-center">
              {/* <Link
                onClick={toggleDrawer}
                to={"/dashboard"}
                className="focus:outline-none ml-4"
              >
                <img
                  className="w-10 h-10 p-1 rounded-full border"
                  src="https://i.ibb.co/whHfRs9/Fotolia-106071621-Subscription-Yearly-XXL-PLUS-square.jpg"
                  alt="User Avatar"
                />
              </Link> */}
              <button
                className="text-gray-700 focus:outline-none"
                onClick={toggleDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-4">
              <Link
                to="/"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={toggleDrawer}
              >
                Home
              </Link>
              <Link
                to="/library"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={toggleDrawer}
              >
                Library
              </Link>
              <Link
                to="/vocabvault"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={toggleDrawer}
              >
                Vocab Vault
              </Link>
              <Link
                to="/courses"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={toggleDrawer}
              >
                Courses
              </Link>
              <Link
                to="/private-batch"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={toggleDrawer}
              >
               Private Batch
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
