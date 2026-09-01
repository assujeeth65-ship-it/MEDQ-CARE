import React from "react";

const MockAbhaCard = ({ patient }) => {
  const {
    name = "Arun Kumar",
    abhaId = "12-3456-7890-1234",
    dateOfBirth = "15 Aug 2000",
    gender = "Male",
    mobile = "9876543210",
    address = "Chennai, Tamil Nadu",
  } = patient || {};

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Card Header */}
      <div className="bg-blue-600 p-5 text-white">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium opacity-90">
              MEDQ CARE
            </p>

            <h2 className="mt-1 text-xl font-bold">
              Mock ABHA Card
            </h2>
          </div>

          <div className="rounded-lg bg-white px-3 py-2">
            <p className="text-sm font-bold text-blue-600">
              ABHA
            </p>
          </div>

        </div>
      </div>

      {/* Patient Details */}
      <div className="p-5">

        {/* Patient Name */}
        <div className="mb-4">
          <p className="text-xs text-gray-500">
            Patient Name
          </p>

          <p className="mt-1 text-lg font-semibold text-gray-800">
            {name}
          </p>
        </div>

        {/* ABHA ID */}
        <div className="mb-4 rounded-xl bg-blue-50 p-4">
          <p className="text-xs text-gray-500">
            ABHA ID
          </p>

          <p className="mt-1 text-lg font-bold tracking-wide text-blue-600">
            {abhaId}
          </p>
        </div>

        {/* Patient Information */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <p className="text-xs text-gray-500">
              Date of Birth
            </p>

            <p className="mt-1 text-sm font-medium text-gray-800">
              {dateOfBirth}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Gender
            </p>

            <p className="mt-1 text-sm font-medium text-gray-800">
              {gender}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Mobile
            </p>

            <p className="mt-1 text-sm font-medium text-gray-800">
              {mobile}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Address
            </p>

            <p className="mt-1 text-sm font-medium text-gray-800">
              {address}
            </p>
          </div>

        </div>

        {/* Mock Notice */}
        <div className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-3">
          <p className="text-center text-xs text-yellow-700">
            ⚠️ This is a mock ABHA card for the MEDQ CARE project.
          </p>
        </div>

      </div>

    </div>
  );
};

export default MockAbhaCard;