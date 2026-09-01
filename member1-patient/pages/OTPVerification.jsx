import { apiFetch } from "../../apiClient";
import React, { useEffect, useRef, useState } from "react";


const OTPVerification = ({
  mobile = localStorage.getItem("pendingPatientPhone") || "9876543210",
  onVerified,
  onBack,
}) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    try {
      const phone = mobile.startsWith("+91") ? mobile : `+91${mobile}`;
      const response = await apiFetch("/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp: enteredOtp }),
      });
      const data = await response.json();

      if (data.token) localStorage.setItem("patientToken", data.token);
      if (data.user) localStorage.setItem("patientUser", JSON.stringify(data.user));

      setError("");
      if (onVerified) onVerified(enteredOtp);
      else alert(data.message || "OTP verified successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleResend = async () => {
    if (timer > 0) return;

    setOtp(["", "", "", "", "", ""]);
    setError("");
    setTimer(30);

    inputRefs.current[0]?.focus();

    try {
      const response = await apiFetch("/auth/resend-otp", { method: "POST", body: JSON.stringify({ phone: mobile }) });
      const data = await response.json();
      if (data.message) setError(data.message);
      setError("");
    } catch (err) {
      setError(err.message);
      setTimer(0);
    }
  };

  const maskedMobile =
    mobile.length >= 10
      ? `${mobile.slice(0, 2)}******${mobile.slice(-2)}`
      : mobile;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            MEDQ CARE
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Smart Healthcare Queue System
          </p>
        </div>

        {/* Back Button */}
        <button
          type="button"
          onClick={onBack}
          className="mb-5 text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back
        </button>

        {/* Title */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Verify OTP
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Enter the 6-digit OTP sent to
          </p>

          <p className="mt-1 font-semibold text-gray-700">
            +91 {maskedMobile}
          </p>
        </div>

        {/* OTP Form */}
        <form onSubmit={handleSubmit}>

          <div className="mb-5 flex justify-center gap-2 sm:gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="h-12 w-10 rounded-xl border border-gray-300 text-center text-xl font-bold text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:h-14 sm:w-12"
              />
            ))}
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-xl bg-red-50 p-3 text-center">
              <p className="text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Verify OTP
          </button>

        </form>

        {/* Resend */}
        <div className="mt-6 text-center">
          {timer > 0 ? (
            <p className="text-sm text-gray-500">
              Resend OTP in{" "}
              <span className="font-semibold text-blue-600">
                {timer}s
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* Demo Information */}
        <div className="mt-6 rounded-xl bg-blue-50 p-4">
          <p className="text-center text-xs text-blue-700">
            The OTP is printed in the backend terminal for this demo.
          </p>
        </div>

      </div>

    </div>
  );
};

export default OTPVerification;
