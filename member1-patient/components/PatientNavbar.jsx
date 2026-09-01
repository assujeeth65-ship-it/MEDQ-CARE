import React from "react";

const PatientNavbar = ({ patientName = "Patient", onLogout }) => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm">

      {/* Logo / Brand */}
      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          MEDQ CARE
        </h1>

        <p className="text-xs text-gray-500">
          Smart Healthcare Queue System
        </p>
      </div>

      {/* Patient Section */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button
          type="button"
          className="relative rounded-full p-2 text-gray-600 transition hover:bg-gray-100"
          aria-label="Notifications"
        >
          <span className="text-xl">🔔</span>

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Patient Info */}
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-gray-800">
            {patientName}
          </p>

          <p className="text-xs text-gray-500">
            Patient
          </p>
        </div>

        {/* Profile Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <span className="font-semibold text-blue-600">
            {patientName.charAt(0).toUpperCase()}
          </span>
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={onLogout}
          className="rounded-lg border border-red-500 px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          Logout
        </button>

      </div>
    </nav>
  );
};

export default PatientNavbar;