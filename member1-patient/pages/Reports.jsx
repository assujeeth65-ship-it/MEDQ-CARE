import React, { useState } from "react";

const Reports = () => {
  const [reports] = useState([
    {
      id: 1,
      name: "Blood Test Report",
      type: "Laboratory",
      hospital: "MEDQ CARE Hospital",
      doctor: "Dr. Arun Kumar",
      date: "25 Aug 2026",
      status: "Available",
    },
    {
      id: 2,
      name: "ECG Report",
      type: "Cardiology",
      hospital: "MEDQ CARE Hospital",
      doctor: "Dr. Arun Kumar",
      date: "20 Aug 2026",
      status: "Available",
    },
    {
      id: 3,
      name: "Chest X-Ray Report",
      type: "Imaging",
      hospital: "City Care Hospital",
      doctor: "Dr. Priya Sharma",
      date: "15 Aug 2026",
      status: "Available",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredReports = reports.filter((report) => {
    const searchText = search.toLowerCase();

    return (
      report.name.toLowerCase().includes(searchText) ||
      report.type.toLowerCase().includes(searchText) ||
      report.hospital.toLowerCase().includes(searchText)
    );
  });

  const handleView = (report) => {
    alert(
      `Report: ${report.name}\n` +
        `Type: ${report.type}\n` +
        `Hospital: ${report.hospital}\n` +
        `Doctor: ${report.doctor}\n` +
        `Date: ${report.date}`
    );
  };

  const handleDownload = (report) => {
    alert(`Downloading ${report.name}...`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Medical Reports
          </h1>

          <p className="mt-1 text-gray-500">
            View and manage your laboratory, imaging and medical reports.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 sm:max-w-md"
          />
        </div>

        {/* Reports */}
        {filteredReports.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">

            <div className="mb-3 text-4xl">
              📄
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              No Reports Found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              No medical reports match your search.
            </p>

          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {filteredReports.map((report) => (
              <div
                key={report.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >

                {/* Icon and Status */}
                <div className="mb-4 flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                    📄
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {report.status}
                  </span>

                </div>

                {/* Report Name */}
                <h2 className="text-lg font-semibold text-gray-800">
                  {report.name}
                </h2>

                <p className="mt-1 text-sm text-blue-600">
                  {report.type}
                </p>

                {/* Details */}
                <div className="mt-4 space-y-2">

                  <div className="flex justify-between gap-3 text-sm">
                    <span className="text-gray-500">
                      Hospital
                    </span>

                    <span className="text-right font-medium text-gray-800">
                      {report.hospital}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 text-sm">
                    <span className="text-gray-500">
                      Doctor
                    </span>

                    <span className="text-right font-medium text-gray-800">
                      {report.doctor}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 text-sm">
                    <span className="text-gray-500">
                      Date
                    </span>

                    <span className="font-medium text-gray-800">
                      {report.date}
                    </span>
                  </div>

                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-3">

                  <button
                    type="button"
                    onClick={() => handleView(report)}
                    className="flex-1 rounded-xl border border-blue-600 px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                  >
                    View
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownload(report)}
                    className="flex-1 rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Download
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default Reports;