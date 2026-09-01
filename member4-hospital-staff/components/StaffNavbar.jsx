import React from "react";

const StaffNavbar = ({
  title = "MEDQ CARE",
  userName = "Staff",
  role = "Hospital Staff",
  onLogout,
}) => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo / Title */}
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              {title}
            </h1>

            <p className="text-sm text-gray-500">
              Hospital Management System
            </p>
          </div>

          {/* User Section */}
          <div className="flex items-center gap-4">

            <div className="hidden sm:block text-right">
              <p className="font-semibold text-gray-800">
                {userName}
              </p>

              <p className="text-xs text-gray-500">
                {role}
              </p>
            </div>

            {/* Profile Icon */}
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>

            {/* Logout */}
            {onLogout && (
              <button
                onClick={onLogout}
                className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 rounded-lg text-sm font-semibold"
              >
                Logout
              </button>
            )}

          </div>

        </div>

      </div>
    </nav>
  );
};

export default StaffNavbar;