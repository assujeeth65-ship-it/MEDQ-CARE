import React from "react";

const QueueCard = ({ queue }) => {
  const {
    tokenNumber = "A-024",
    nowServing = "A-020",
    patientsAhead = 3,
    estimatedWaitTime = "15 mins",
    doctorName = "Dr. Arun Kumar",
    department = "Cardiology",
    room = "204",
    status = "WAITING",
  } = queue || {};

  const getStatusClass = () => {
    switch (status.toLowerCase()) {
      case "waiting":
        return "bg-yellow-100 text-yellow-700";

      case "serving":
        return "bg-green-100 text-green-700";

      case "completed":
        return "bg-blue-100 text-blue-700";

      case "cancelled":
      case "canceled":
        return "bg-red-100 text-red-700";

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
            Live Queue
          </h2>

          <p className="text-sm text-gray-500">
            {doctorName}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass()}`}
        >
          {status}
        </span>
      </div>

      {/* Department & Room */}
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">
            Department
          </p>

          <p className="mt-1 font-medium text-gray-800">
            {department}
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">
            Room
          </p>

          <p className="mt-1 font-medium text-gray-800">
            {room}
          </p>
        </div>
      </div>

      {/* Token Information */}
      <div className="mb-4 rounded-xl bg-blue-50 p-4 text-center">

        <p className="text-sm text-gray-500">
          Your Token
        </p>

        <p className="my-1 text-3xl font-bold text-blue-600">
          {tokenNumber}
        </p>

        <p className="text-sm text-gray-500">
          Now Serving:{" "}
          <span className="font-semibold text-gray-800">
            {nowServing}
          </span>
        </p>

      </div>

      {/* Queue Information */}
      <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-4">

        <div>
          <p className="text-xs text-gray-500">
            Patients Ahead
          </p>

          <p className="mt-1 text-xl font-semibold text-gray-800">
            {patientsAhead}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">
            Estimated Wait
          </p>

          <p className="mt-1 text-xl font-semibold text-gray-800">
            {estimatedWaitTime}
          </p>
        </div>

      </div>

      {/* Queue Message */}
      <div className="mt-4 rounded-xl bg-gray-50 p-3 text-center">

        {status.toLowerCase() === "serving" ? (
          <p className="font-semibold text-green-600">
            🎉 It is your turn!
          </p>
        ) : status.toLowerCase() === "completed" ? (
          <p className="font-semibold text-blue-600">
            Consultation completed
          </p>
        ) : status.toLowerCase() === "cancelled" ||
          status.toLowerCase() === "canceled" ? (
          <p className="font-semibold text-red-600">
            Queue cancelled
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Please wait for your token to be called.
          </p>
        )}

      </div>

    </div>
  );
};

export default QueueCard;