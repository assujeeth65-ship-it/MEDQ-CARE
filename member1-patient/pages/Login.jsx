import { apiFetch } from "../../apiClient";
import React, { useState } from "react";


const Login = ({ onLogin }) => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const patient = { mobile: `+91${mobile}` };

    try {
      const response = await apiFetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patient),
      });
      const data = await response.json();

      localStorage.setItem("pendingPatientPhone", patient.mobile);

      if (onLogin) {
        onLogin(patient);
      } else {
        alert(data.message || "OTP sent successfully!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            MEDQ CARE
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Smart Healthcare Queue System
          </p>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Patient Login
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Login using your registered mobile number
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>

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
              type="tel"
              value={mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                if (value.length <= 10) {
                  setMobile(value);
                }

                setError("");
              }}
              placeholder="Enter mobile number"
              maxLength={10}
              className="w-full px-4 py-3 text-gray-800 outline-none"
            />

          </div>

          {/* Error */}
          {error && (
            <p className="mt-2 text-sm text-red-500">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Continue
          </button>

        </form>

        {/* Register */}
        <div className="mt-6 text-center">

          <p className="text-sm text-gray-500">
            Don't have an account?
          </p>

          <button
            type="button"
            onClick={() => (window.location.href = "/patient/register")}
            className="mt-1 font-semibold text-blue-600 hover:underline"
          >
            Create Account
          </button>

        </div>

        {/* Demo Information */}
        <div className="mt-6 rounded-xl bg-blue-50 p-4">
          <p className="text-center text-xs text-blue-700">
            Enter your registered mobile number to receive an OTP.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;
