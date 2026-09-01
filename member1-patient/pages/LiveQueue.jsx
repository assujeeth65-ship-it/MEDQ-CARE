import React, { useState } from "react";
import QueueCard from "../components/QueueCard";

const LiveQueue = () => {
  const [queue, setQueue] = useState({
    tokenNumber: "A-024",
    nowServing: "A-020",
    patientsAhead: 3,
    estimatedWaitTime: "15 mins",
    doctorName: "Dr. Arun Kumar",
    department: "Cardiology",
    room: "204",
    status: "WAITING",
  });

  const handleRefresh = () => {
    // Demo queue update
    setQueue((prevQueue) => ({
      ...prevQueue,
      nowServing: "A-021",
      patientsAhead: 2,
      estimatedWaitTime: "10 mins",
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Live Queue
            </h1>

            <p className="mt-1 text-gray-500">
              Track your position in the hospital queue.
            </p>
          </div>

          <button
            type="button"
            onClick={handleRefresh}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            🔄 Refresh Queue
          </button>

        </div>

        {/* Queue Status Banner */}
        <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <span className="text-lg">
                ✓
              </span>
            </div>

            <div>
              <h2 className="font-semibold text-green-800">
                You are in the queue
              </h2>

              <p className="text-sm text-green-700">
                Please stay nearby until your token is called.
              </p>
            </div>

          </div>

        </div>

        {/* Queue Card */}
        <div className="flex justify-center">
          <QueueCard queue={queue} />
        </div>

        {/* Queue Details */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
            <p className="text-sm text-gray-500">
              Your Token
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {queue.tokenNumber}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
            <p className="text-sm text-gray-500">
              Now Serving
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {queue.nowServing}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
            <p className="text-sm text-gray-500">
              Patients Ahead
            </p>

            <p className="mt-2 text-3xl font-bold text-orange-500">
              {queue.patientsAhead}
            </p>
          </div>

        </div>

        {/* Information */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="text-lg font-bold text-gray-800">
            Queue Information
          </h2>

          <div className="mt-4 space-y-3 text-sm">

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-500">
                Doctor
              </span>

              <span className="font-medium text-gray-800">
                {queue.doctorName}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-500">
                Department
              </span>

              <span className="font-medium text-gray-800">
                {queue.department}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-500">
                Room
              </span>

              <span className="font-medium text-gray-800">
                {queue.room}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Estimated Waiting Time
              </span>

              <span className="font-medium text-gray-800">
                {queue.estimatedWaitTime}
              </span>
            </div>

          </div>

        </div>

        {/* Notice */}
        <div className="mt-6 rounded-2xl bg-blue-50 p-5">
          <p className="text-center text-sm text-blue-700">
            💡 Please keep your phone nearby. You will be notified when
            your token is approaching.
          </p>
        </div>

      </div>

    </div>
  );
};

export default LiveQueue;