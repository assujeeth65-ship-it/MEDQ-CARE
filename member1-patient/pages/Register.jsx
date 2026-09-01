import { apiFetch } from "../../apiClient";
import React, { useState } from "react";


const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    dateOfBirth: "",
    gender: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.dateOfBirth) {
      setError("Please select your date of birth.");
      return;
    }

    if (!formData.gender) {
      setError("Please select your gender.");
      return;
    }

    if (!formData.address.trim()) {
      setError("Please enter your address.");
      return;
    }

    setError("");

    const patientData = {
      ...formData,
      mobile: `+91${formData.mobile}`,
    };

    try {
      const response = await apiFetch("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData),
      });
      const data = await response.json();

      localStorage.setItem("pendingPatientPhone", patientData.mobile);

      if (onRegister) {
        onRegister(patientData);
      } else {
        alert(data.message || "Registration successful. OTP sent.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">

      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            MEDQ CARE
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Smart Healthcare Queue System
          </p>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Create Patient Account
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Enter your details to register with MEDQ CARE
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="mobile"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>

            <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500">

              <span className="flex items-center bg-gray-50 px-3 text-sm text-gray-600">
                +91
              </span>

              <input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");

                  if (value.length <= 10) {
                    setFormData((prev) => ({
                      ...prev,
                      mobile: value,
                    }));
                  }

                  setError("");
                }}
                placeholder="Enter mobile number"
                maxLength={10}
                className="w-full px-4 py-3 text-gray-800 outline-none"
              />

            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label
              htmlFor="dateOfBirth"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>

            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Gender
            </label>

            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
            >
              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Address
            </label>

            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="3"
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-xl bg-red-50 p-3">
              <p className="text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?
          </p>

          <button
            type="button"
            onClick={() => (window.location.href = "/patient/login")}
            className="mt-1 font-semibold text-blue-600 hover:underline"
          >
            Login
          </button>
        </div>

      </div>

    </div>
  );
};

export default Register;
