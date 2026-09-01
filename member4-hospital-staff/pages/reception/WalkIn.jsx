import React, { useState } from "react";

const WalkInRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    department: "",
    doctor: "",
    reason: "",
  });

  const [registered, setRegistered] = useState(false);
  const [token, setToken] = useState("");

  const doctors = {
    Cardiology: ["Dr. Arun", "Dr. Ravi"],
    "General Medicine": ["Dr. Meena", "Dr. Priya"],
    Orthopedics: ["Dr. Kumar", "Dr. Suresh"],
    Pediatrics: ["Dr. Anitha", "Dr. Lakshmi"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
      ...(name === "department" ? { doctor: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.gender ||
      !formData.phone ||
      !formData.department ||
      !formData.doctor
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Temporary demo token.
    // Later this will come from Member 3 Queue API.
    const generatedToken = `W-${Math.floor(
      100 + Math.random() * 900
    )}`;

    setToken(generatedToken);
    setRegistered(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      phone: "",
      department: "",
      doctor: "",
      reason: "",
    });

    setRegistered(false);
    setToken("");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              MEDQ CARE
            </h1>

            <p className="text-sm text-gray-500">
              Walk-In Registration
            </p>
          </div>

          <div className="text-right">
            <p className="font-semibold text-gray-800">
              Reception Staff
            </p>

            <p className="text-sm text-gray-500">
              Staff ID: R001
            </p>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-8">

        {!registered ? (

          <>
            {/* Title */}
            <div className="mb-8">

              <h2 className="text-3xl font-bold text-gray-800">
                Walk-In Patient Registration
              </h2>

              <p className="text-gray-500 mt-1">
                Register a patient who arrives without a prior appointment.
              </p>

            </div>

            {/* Form */}
            <div className="bg-white border rounded-xl p-6">

              <form onSubmit={handleSubmit}>

                {/* Patient Details */}
                <div className="mb-8">

                  <h3 className="text-lg font-bold text-gray-800 mb-5">
                    Patient Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Patient Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter patient name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age *
                      </label>

                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender *
                      </label>

                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                  </div>

                </div>

                {/* Visit Details */}
                <div className="mb-8">

                  <h3 className="text-lg font-bold text-gray-800 mb-5">
                    Visit Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Department */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department *
                      </label>

                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">
                          Select Department
                        </option>

                        <option value="Cardiology">
                          Cardiology
                        </option>

                        <option value="General Medicine">
                          General Medicine
                        </option>

                        <option value="Orthopedics">
                          Orthopedics
                        </option>

                        <option value="Pediatrics">
                          Pediatrics
                        </option>
                      </select>
                    </div>

                    {/* Doctor */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Doctor *
                      </label>

                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        disabled={!formData.department}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                      >
                        <option value="">
                          {formData.department
                            ? "Select Doctor"
                            : "Select Department First"}
                        </option>

                        {formData.department &&
                          doctors[formData.department]?.map((doctor) => (
                            <option key={doctor} value={doctor}>
                              {doctor}
                            </option>
                          ))}
                      </select>
                    </div>

                  </div>

                  {/* Reason */}
                  <div className="mt-5">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Visit
                    </label>

                    <textarea
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Enter reason for visit..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />

                  </div>

                </div>

                {/* Information */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">

                  <p className="font-semibold text-blue-800">
                    Walk-In Queue
                  </p>

                  <p className="text-sm text-blue-700 mt-1">
                    After registration, the patient will be added to the
                    selected doctor's queue.
                  </p>

                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3">

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                  >
                    Clear
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                  >
                    Register & Join Queue
                  </button>

                </div>

              </form>

            </div>
          </>

        ) : (

          /* Success */
          <div className="bg-white border rounded-2xl p-8 text-center">

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-4xl">
              ✓
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mt-6">
              Registration Successful
            </h2>

            <p className="text-gray-500 mt-2">
              The walk-in patient has been registered successfully.
            </p>

            {/* Token */}
            <div className="max-w-sm mx-auto bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">

              <p className="text-sm text-gray-500">
                Queue Token
              </p>

              <p className="text-5xl font-bold text-blue-700 mt-2">
                {token}
              </p>

              <div className="border-t border-blue-200 mt-5 pt-5 text-left">

                <p className="text-sm text-gray-500">
                  Patient
                </p>

                <p className="font-semibold text-gray-800">
                  {formData.name}
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  Doctor
                </p>

                <p className="font-semibold text-gray-800">
                  {formData.doctor}
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  Department
                </p>

                <p className="font-semibold text-gray-800">
                  {formData.department}
                </p>

              </div>

            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6 max-w-lg mx-auto">

              <p className="text-sm text-yellow-800">
                <strong>Demo:</strong> The token above is generated locally.
                Later, the real token will be generated by the Queue module.
              </p>

            </div>

            <button
              onClick={resetForm}
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Register Another Patient
            </button>

          </div>

        )}

      </main>

    </div>
  );
};

export default WalkInRegistration;