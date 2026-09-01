import React from "react";

const AppointmentCard = ({ appointment, onCancel, onView }) => {
  // Default data for safety
  const {
    doctorName = "Dr. John Doe",
    department = "General Medicine",
    hospitalName = "MEDQ CARE Hospital",
    date = "2026-08-28",
    time = "10:30 AM",
    status = "Confirmed",
    tokenNumber = "T-001",
    appointmentType = "In-Person",
  } = appointment || {};

  // Status styling
  const getStatusClass = () => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-green-100 text-green-700";

      case "completed":
        return "bg-blue-100 text-blue-700";

      case "cancelled":
      case "canceled":
        return "bg-red-100 text-red-700";

      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "waiting":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {doctorName}
          </h2>

          <p className="text-sm text-gray-500">
            {department}
          </p>
        </div>

        {/* Appointment Status */}
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass()}`}
        >
          {status}
        </span>
      </div>

      {/* Hospital */}
      <div className="mb-4 rounded-xl bg-gray-50 p-3">
        <p className="text-xs text-gray-500">Hospital</p>

        <p className="mt-1 font-medium text-gray-800">
          {hospitalName}
        </p>
      </div>

      {/* Appointment Details */}
      <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-4">
        
        <div>
          <p className="text-xs text-gray-500">Date</p>
          <p className="mt-1 font-medium text-gray-800">
            {date}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Time</p>
          <p className="mt-1 font-medium text-gray-800">
            {time}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Token Number</p>
          <p className="mt-1 font-semibold text-blue-600">
            {tokenNumber}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Type</p>
          <p className="mt-1 font-medium text-gray-800">
            {appointmentType}
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        
        <button
          type="button"
          onClick={() => onView && onView(appointment)}
          className="flex-1 rounded-xl border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          View Details
        </button>

        {status.toLowerCase() !== "cancelled" &&
          status.toLowerCase() !== "completed" && (
            <button
              type="button"
              onClick={() => onCancel && onCancel(appointment)}
              className="flex-1 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Cancel
            </button>
          )}

      </div>
    </div>
  );
};

export default AppointmentCard;