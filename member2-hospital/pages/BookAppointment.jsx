import React, { useState } from "react";
import TimeSlot from "../components/TimeSlot";

const BookAppointment = () => {
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const hospitals = [
    "MEDQ CARE Hospital",
    "City Care Hospital",
    "Apollo Health Center",
  ];

  const departments = [
    "Cardiology",
    "General Medicine",
    "Orthopedics",
    "Dermatology",
    "Neurology",
  ];

  const doctors = [
    "Dr. Arun Kumar",
    "Dr. Priya Sharma",
    "Dr. Rajesh Kumar",
    "Dr. Meena Krishnan",
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
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !selectedHospital ||
      !selectedDepartment ||
      !selectedDoctor ||
      !selectedDate ||
      !selectedTime
    ) {
      alert("Please select all appointment details.");
      return;
    }

    const appointmentData = {
      hospital: selectedHospital,
      department: selectedDepartment,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      status: "Confirmed",
    };

    console.log("Appointment Details:", appointmentData);

    alert(
      `Appointment Confirmed!\n\nDoctor: ${selectedDoctor}\nDate: ${selectedDate}\nTime: ${selectedTime}`
    );
  };

  return (
    <div className="page-container">
      <div className="appointment-header">
        <h1>Book Appointment</h1>

        <p>
          Select your hospital, department, doctor and available
          appointment slot.
        </p>
      </div>

      <form className="appointment-form" onSubmit={handleSubmit}>
        {/* Hospital */}
        <div className="form-group">
          <label htmlFor="hospital">Select Hospital</label>

          <select
            id="hospital"
            value={selectedHospital}
            onChange={(event) => setSelectedHospital(event.target.value)}
          >
            <option value="">-- Select Hospital --</option>

            {hospitals.map((hospital) => (
              <option key={hospital} value={hospital}>
                {hospital}
              </option>
            ))}
          </select>
        </div>

        {/* Department */}
        <div className="form-group">
          <label htmlFor="department">Select Department</label>

          <select
            id="department"
            value={selectedDepartment}
            onChange={(event) => setSelectedDepartment(event.target.value)}
          >
            <option value="">-- Select Department --</option>

            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor */}
        <div className="form-group">
          <label htmlFor="doctor">Select Doctor</label>

          <select
            id="doctor"
            value={selectedDoctor}
            onChange={(event) => setSelectedDoctor(event.target.value)}
          >
            <option value="">-- Select Doctor --</option>

            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="form-group">
          <label htmlFor="date">Select Date</label>

          <input
            id="date"
            type="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          />
        </div>

        {/* Time Slots */}
        <div className="form-group">
          <label>Select Available Time</label>

          <div className="time-slot-grid">
            {timeSlots.map((time) => (
              <TimeSlot
                key={time}
                time={time}
                selected={selectedTime === time}
                onSelect={() => setSelectedTime(time)}
              />
            ))}
          </div>
        </div>

        {/* Appointment Summary */}
        {(selectedHospital ||
          selectedDepartment ||
          selectedDoctor ||
          selectedDate ||
          selectedTime) && (
          <div className="appointment-summary">
            <h2>Appointment Summary</h2>

            <p>
              <strong>Hospital:</strong>{" "}
              {selectedHospital || "Not selected"}
            </p>

            <p>
              <strong>Department:</strong>{" "}
              {selectedDepartment || "Not selected"}
            </p>

            <p>
              <strong>Doctor:</strong>{" "}
              {selectedDoctor || "Not selected"}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {selectedDate || "Not selected"}
            </p>

            <p>
              <strong>Time:</strong>{" "}
              {selectedTime || "Not selected"}
            </p>
          </div>
        )}

        {/* Submit */}
        <button type="submit" className="primary-button">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;