import React from "react";

const DoctorStatus = ({
  doctorName,
  specialization,
  status = "Available",
  roomNumber,
}) => {
  const getStatusStyle = () => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";

      case "Busy":
        return "bg-yellow-100 text-yellow-700";

      case "Offline":
        return "bg-gray-100 text-gray-600";

      case "On Leave":
        return "bg-red-100 text-red-700";

      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

      <div className="flex items-center justify-between gap-4">

        {/* Doctor Information */}
        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
            {doctorName
              ? doctorName.charAt(0).toUpperCase()
              : "D"}
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              {doctorName || "Doctor"}
            </h3>

            <p className="text-sm text-gray-500">
              {specialization || "Specialization"}
            </p>

            {roomNumber && (
              <p className="text-xs text-gray-400 mt-1">
                Room: {roomNumber}
              </p>
            )}
          </div>

        </div>

        {/* Status */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusStyle()}`}
        >
          {status}
        </span>

      </div>

    </div>
  );
};

export default DoctorStatus;