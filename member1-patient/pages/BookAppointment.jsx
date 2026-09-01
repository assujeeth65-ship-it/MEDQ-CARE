import React, { useState } from "react";

const BookAppointment = ({ onAppointmentBooked }) => {
  const [formData, setFormData] = useState({
    hospital: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    appointmentType: "In-Person",
    reason: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const hospitals = [
    "MEDQ CARE Hospital",
    "City Care Hospital",
    "Apollo Medical Center",
  ];

  const departments = [
    "General Medicine",
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Neurology",
    "Pediatrics",
  ];

  const doctors = [
    "Dr. Arun Kumar",
    "Dr. Priya Sharma",
    "Dr. Rahul Raj",
    "Dr. Anitha Devi",
  ];

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.hospital) {
      setError("Please select a hospital.");
      return;
    }

    if (!formData.department) {
      setError("Please select a department.");
      return;
    }

    if (!formData.doctor) {
      setError("Please select a doctor.");
      return;
    }

    if (!formData.date) {
      setError("Please select an appointment date.");
      return;
    }

    if (!formData.time) {
      setError("Please select an appointment time.");
      return;
    }

    if (!formData.reason.trim()) {
      setError("Please enter the reason for your appointment.");
      return;
    }

    const appointment = {
      id: Date.now(),
      ...formData,
      status: "Pending",
      tokenNumber: "A-025",
    };

    setError("");
    setMessage("Appointment booked successfully!");

    if (onAppointmentBooked) {
      onAppointmentBooked(appointment);
    }

    setFormData({
      hospital: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      appointmentType: "In-Person",
      reason: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Book Appointment
          </h1>

          <p className="mt-1 text-gray-500">
            Select your hospital, doctor and preferred appointment time.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Hospital */}
            <div>
              <label
                htmlFor="hospital"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Hospital
              </label>

              <select
                id="hospital"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
              >
                <option value="">Select Hospital</option>

                {hospitals.map((hospital) => (
                  <option key={hospital} value={hospital}>
                    {hospital}
                  </option>
                ))}
              </select>
            </div>

            {/* Department */}
            <div>
              <label
                htmlFor="department"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Department
              </label>

              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
              >
                <option value="">Select Department</option>

                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor */}
            <div>
              <label
                htmlFor="doctor"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Doctor
              </label>

              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
              >
                <option value="">Select Doctor</option>

                {doctors.map((doctor) => (
                  <option key={doctor} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Appointment Date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Appointment Time
                </label>

                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
                >
                  <option value="">Select Time</option>

                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Appointment Type */}
            <div>
              <p className="mb-3 text-sm font-medium text-gray-700">
                Appointment Type
              </p>

              <div className="grid gap-3 sm:grid-cols-2">

                <label
                  className={`cursor-pointer rounded-xl border p-4 ${
                    formData.appointmentType === "In-Person"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="appointmentType"
                    value="In-Person"
                    checked={formData.appointmentType === "In-Person"}
                    onChange={handleChange}
                    className="mr-2"
                  />

                  <span className="font-medium text-gray-800">
                    In-Person
                  </span>
                </label>

                <label
                  className={`cursor-pointer rounded-xl border p-4 ${
                    formData.appointmentType === "Online"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Online"
                    checked={formData.appointmentType === "Online"}
                    onChange={handleChange}
                    className="mr-2"
                  />

                  <span className="font-medium text-gray-800">
                    Online Consultation
                  </span>
                </label>

              </div>
            </div>

            {/* Reason */}
            <div>
              <label
                htmlFor="reason"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Reason for Appointment
              </label>

              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your symptoms or reason for consultation..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl bg-red-50 p-4">
                <p className="text-sm font-medium text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* Success */}
            {message && (
              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-sm font-medium text-green-600">
                  {message}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Book Appointment
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default BookAppointment;