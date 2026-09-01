import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LabBooking.css";

const LabBooking = () => {
  const navigate = useNavigate();

  const [selectedTest, setSelectedTest] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Temporary laboratory services
  // These can later be loaded from your backend API.
  const labTests = [
    {
      id: 1,
      name: "Complete Blood Count",
      shortName: "CBC",
      description: "Basic blood test to check blood cells and general health.",
      duration: "15-30 mins",
    },
    {
      id: 2,
      name: "Blood Glucose Test",
      shortName: "Glucose",
      description: "Measures the amount of glucose present in the blood.",
      duration: "10-15 mins",
    },
    {
      id: 3,
      name: "Lipid Profile",
      shortName: "Lipid",
      description: "Measures cholesterol and other blood fats.",
      duration: "15-30 mins",
    },
    {
      id: 4,
      name: "Liver Function Test",
      shortName: "LFT",
      description: "Checks important indicators of liver function.",
      duration: "20-30 mins",
    },
    {
      id: 5,
      name: "Kidney Function Test",
      shortName: "KFT",
      description: "Checks indicators related to kidney function.",
      duration: "20-30 mins",
    },
    {
      id: 6,
      name: "Thyroid Profile",
      shortName: "Thyroid",
      description: "Measures thyroid-related hormone levels.",
      duration: "20-30 mins",
    },
  ];

  // Temporary dates
  const dates = [
    "2026-08-29",
    "2026-08-30",
    "2026-08-31",
    "2026-09-01",
  ];

  // Temporary time slots
  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  // Confirm laboratory booking
  const handleConfirmBooking = (event) => {
    event.preventDefault();

    if (!selectedTest || !selectedDate || !selectedTime) {
      alert("Please select the laboratory test, date and time.");
      return;
    }

    setBookingConfirmed(true);
  };

  // Go back to previous page
  const handleBack = () => {
    navigate(-1);
  };

  // Go to appointments
  const handleViewAppointments = () => {
    navigate("/my-appointments");
  };

  // Find selected test details
  const selectedTestDetails = labTests.find(
    (test) => test.name === selectedTest
  );

  return (
    <div className="lab-booking-page">

      {/* Header */}
      <div className="lab-header">

        <button
          className="lab-back-button"
          onClick={handleBack}
        >
          ← Back
        </button>

        <div>
          <h1>Book Laboratory Test</h1>

          <p>
            Select a laboratory test and choose
            your preferred date and time.
          </p>
        </div>

      </div>

      {!bookingConfirmed ? (

        <form
          className="lab-booking-form"
          onSubmit={handleConfirmBooking}
        >

          {/* Step 1 - Select Test */}
          <section className="lab-booking-section">

            <h2>1. Select Laboratory Test</h2>

            <div className="lab-test-grid">

              {labTests.map((test) => (

                <div
                  key={test.id}
                  className={`lab-test-card ${
                    selectedTest === test.name
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedTest(test.name)
                  }
                >

                  <div className="lab-test-icon">
                    🧪
                  </div>

                  <div className="lab-test-content">

                    <div className="lab-test-title">
                      <h3>{test.name}</h3>

                      <span>
                        {test.shortName}
                      </span>
                    </div>

                    <p>
                      {test.description}
                    </p>

                    <small>
                      Duration: {test.duration}
                    </small>

                  </div>

                </div>

              ))}

            </div>

          </section>


          {/* Step 2 - Select Date */}
          <section className="lab-booking-section">

            <h2>2. Select Date</h2>

            <div className="lab-date-grid">

              {dates.map((date) => (

                <button
                  type="button"
                  key={date}
                  className={`lab-date-button ${
                    selectedDate === date
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedDate(date)
                  }
                >
                  {new Date(date).toLocaleDateString(
                    "en-IN",
                    {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    }
                  )}
                </button>

              ))}

            </div>

          </section>


          {/* Step 3 - Select Time */}
          <section className="lab-booking-section">

            <h2>3. Select Time</h2>

            <div className="lab-time-grid">

              {timeSlots.map((time) => (

                <button
                  type="button"
                  key={time}
                  className={`lab-time-button ${
                    selectedTime === time
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedTime(time)
                  }
                >
                  {time}
                </button>

              ))}

            </div>

          </section>


          {/* Booking Summary */}
          <section className="lab-booking-summary">

            <h2>Booking Summary</h2>

            <div className="lab-summary-row">
              <span>Laboratory Test</span>

              <strong>
                {selectedTest || "Not selected"}
              </strong>
            </div>

            <div className="lab-summary-row">
              <span>Date</span>

              <strong>
                {selectedDate || "Not selected"}
              </strong>
            </div>

            <div className="lab-summary-row">
              <span>Time</span>

              <strong>
                {selectedTime || "Not selected"}
              </strong>
            </div>

            {selectedTestDetails && (
              <div className="lab-summary-description">

                <p>
                  {selectedTestDetails.description}
                </p>

              </div>
            )}

          </section>


          {/* Confirm */}
          <div className="lab-booking-actions">

            <button
              type="submit"
              className="lab-confirm-button"
            >
              Confirm Laboratory Booking
            </button>

          </div>

        </form>

      ) : (

        /* Confirmation */
        <div className="lab-confirmation-card">

          <div className="lab-success-icon">
            ✓
          </div>

          <h2>
            Laboratory Booking Confirmed!
          </h2>

          <p>
            Your laboratory test has been
            successfully scheduled.
          </p>


          <div className="lab-confirmation-details">

            <div>
              <span>Test</span>
              <strong>{selectedTest}</strong>
            </div>

            <div>
              <span>Date</span>
              <strong>{selectedDate}</strong>
            </div>

            <div>
              <span>Time</span>
              <strong>{selectedTime}</strong>
            </div>

          </div>


          <div className="lab-confirmation-actions">

            <button
              className="lab-primary-button"
              onClick={handleViewAppointments}
            >
              View My Appointments
            </button>

            <button
              className="lab-secondary-button"
              onClick={() => {
                setBookingConfirmed(false);
                setSelectedTest("");
                setSelectedDate("");
                setSelectedTime("");
              }}
            >
              Book Another Test
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default LabBooking;