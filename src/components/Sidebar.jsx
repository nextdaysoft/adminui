import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
export default function Sidebar() {
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showManageCollectors, setShowManageCollectors] = useState(false);

  const toggleQuickMenu = () => {
    setShowQuickMenu(!showQuickMenu);
    setShowNotifications(false);
    setShowManageCollectors(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowQuickMenu(false);
    setShowManageCollectors(false);
  };

  const toggleManageCollectors = () => {
    setShowManageCollectors(!showManageCollectors);
    setShowQuickMenu(false);
    setShowNotifications(false);
  };
  return (
    <div className="bg-red-800 text-white h-screen flex flex-col  max-w-100 mx-auto">
      <div className="flex-grow p-4 overflow-y-auto mt-6">
        {/* Dashboard section */}
        <ul className="mb-8">
          {/* Dashboard links */}
          <li className="flex items-center mb-6">
            <Link to="/" className="text-white flex items-center gap-2">
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center mb-6">
          <Link to="/analytics" className="text-white flex items-center gap-2">
              <span>Analytics</span>
            </Link>
            
          </li>
          <li className="flex items-center mb-6">
            <span className="flex items-center gap-2">
              {/* <TrendingUp /> */}
              <span>Sales</span>
            </span>
          </li>
        </ul>

        {/* Quick Menu section */}
        <ul className="mb-12">
          <li className="flex items-center mb-3">
            <button
              onClick={toggleQuickMenu}
              className="text-white flex items-center gap-2 w-full"
            >
              <span>Quick Menu</span>
              <FaChevronDown className="ml-2" /> {/* Add dropdown icon */}
            </button>
          </li>
          {showQuickMenu && (
            <>
              {/* Dropdown options for Quick Menu */}
              <li className="flex items-center mb-3 pl-4">
                <Link
                  to="/users"
                  className="text-white flex items-center gap-2 w-full"
                >
                  <span>Users</span>
                </Link>
              </li>
              <li className="flex items-center mb-3 pl-4">
                <Link
                  to="/collectors"
                  className="text-white flex items-center gap-2 w-full"
                >
                  <span>Collectors</span>
                </Link>
              </li>
              <li className="flex items-center mb-3 pl-4">
                <Link
                  to="/requests"
                  className="text-white flex items-center gap-2 w-full"
                >
                  <span>Requests</span>
                </Link>
              </li>
             
              {/* Add more Quick Menu dropdown options as needed */}
            </>
          )}
        </ul>

        {/* Notifications section */}
        <ul className="mb-12">
          <li className="flex items-center mb-3">
            <button
              onClick={toggleNotifications}
              className="text-white flex items-center gap-2 w-full"
            >
              <span>Notifications</span>
              <FaChevronDown className="ml-2" /> {/* Add dropdown icon */}
            </button>
          </li>
          {showNotifications && (
            <>
              {/* Dropdown options for Quick Menu */}
              <li className="flex items-center mb-3 pl-4">
                <Link
                  to="/nofify/notifiyAllUsers"
                  className="text-white flex items-center gap-2 w-full"
                >
                  <span>To All Users</span>
                </Link>
              </li>
              <li className="flex items-center mb-3 pl-4">
                <Link
                  to="/nofify/notifiyAllCollectors"
                  className="text-white flex items-center gap-2 w-full"
                >
                  <span>To All Collectors</span>
                </Link>
              </li>
              <li className="flex items-center mb-3 pl-4">
                <Link
                  to="/nofify/nofityAll"
                  className="text-white flex items-center gap-2 w-full"
                >
                  <span>To Both Collector and User</span>
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Manage Collectors section */}
        <ul className="mb-12">
          <li className="flex items-center mb-3">
            <button
              onClick={toggleManageCollectors}
              className="text-white flex items-center gap-2 w-full"
            >
              <span>Manage Collectors</span>
              <FaChevronDown className="ml-2" /> {/* Add dropdown icon */}
            </button>
          </li>
          {showManageCollectors && (
            <>
              {/* Dropdown options for Quick Menu */}
              <li className="flex items-center mb-3 pl-4">
                <Link
                  to="/pendingCollectors"
                  className="text-white flex items-center gap-2 w-full"
                >
                  <span>Pending Collectors</span>
                </Link>
              </li>
              <li className="flex items-center mb-3 pl-4">
                <Link
                  to="/rejectedCollectors"
                  className="text-white flex items-center gap-2 w-full"
                >
                  <span>Rejected Collectors</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
