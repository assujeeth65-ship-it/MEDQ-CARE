import React from "react";

const PatientTable = ({ patients = [], onView, onAction }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">
          Patient List
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          View and manage patient information.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gray-50">
            <tr className="text-left">

              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Patient ID
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Patient Name
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Age
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Gender
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Doctor
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Status
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Action
              </th>

            </tr>
          </thead>

          <tbody>

            {patients.length > 0 ? (

              patients.map((patient, index) => (

                <tr
                  key={patient.patientId || index}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >

                  {/* Patient ID */}
                  <td className="px-6 py-4">
                    <span className="font-semibold text-blue-600">
                      {patient.patientId || "-"}
                    </span>
                  </td>

                  {/* Name */}
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-800">
                      {patient.name || "-"}
                    </p>
                  </td>

                  {/* Age */}
                  <td className="px-6 py-4 text-gray-600">
                    {patient.age || "-"}
                  </td>

                  {/* Gender */}
                  <td className="px-6 py-4 text-gray-600">
                    {patient.gender || "-"}
                  </td>

                  {/* Doctor */}
                  <td className="px-6 py-4 text-gray-600">
                    {patient.doctorName || "-"}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        patient.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : patient.status === "In Consultation"
                          ? "bg-blue-100 text-blue-700"
                          : patient.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {patient.status || "Waiting"}
                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">

                    <div className="flex gap-2">

                      {onView && (
                        <button
                          onClick={() => onView(patient)}
                          className="px-3 py-2 border border-blue-300 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-semibold"
                        >
                          View
                        </button>
                      )}

                      {onAction && (
                        <button
                          onClick={() => onAction(patient)}
                          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold"
                        >
                          Action
                        </button>
                      )}

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-12 text-center text-gray-500"
                >
                  No patients available.
                </td>
              </tr>

            )}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default PatientTable;