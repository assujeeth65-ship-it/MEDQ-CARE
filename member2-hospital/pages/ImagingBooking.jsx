import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImagingBooking.css";

const ImagingBooking = () => {
  const navigate = useNavigate();

  const [selectedTest, setSelectedTest] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Temporary imaging services
  const imagingTests = [
    {
      id: 1,
      name: "X-Ray",
      description: "Basic diagnostic X-Ray imaging",
      duration: "15-20 mins",
    },
    {
      id: 2,
      name: "Ultrasound",
      description: "Ultrasound scanning for diagnostic evaluation",
      duration: "30-45 mins",
    },
    {
      id: 3,
      name: "CT Scan",
      description: "Computed Tomography scan",
      duration: "30-60 mins",
    },
    {
      id: 4,
      name: "MRI Scan",
      description: "Magnetic Resonance Imaging",
      duration: "45-90 mins",
    },
    {
      id: 5,
      name: "ECG",
      description: "Electrocardiogram examination",
      duration: "10-15 mins",
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
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Confirm booking
  const handleConfirmBooking = (event) => {
    event.preventDefault();

    if (!selectedTest || !selectedDate || !selectedTime) {
      alert("Please select the imaging test, date and time.");
      return;
    }

    setBookingConfirmed(true);
  };

  // Go back
  const handleBack = () => {
    navigate(-1);
  };

  // Go to appointments
  const handleViewAppointments = () => {
    navigate("/my-appointments");
  };

  // Find selected test details
  const selectedTestDetails = imagingTests.find(
    (test) => test.name === selectedTest
  );

  return (
    <div className="imaging-booking-page">

      {/* Header */}
      <div className="imaging-header">

        <button
          className="back-button"
          onClick={handleBack}
        >
          ← Back
        </button>

        <div>
          <h1>Book Imaging Service</h1>

          <p>
            Select an imaging test and choose your
            preferred date and time.
          </p>
        </div>

      </div>

      {!bookingConfirmed ? (

        <form
          className="imaging-booking-form"
          onSubmit={handleConfirmBooking}
        >

          {/* Step 1 */}
          <section className="booking-section">

            <h2>1. Select Imaging Test</h2>

            <div className="imaging-test-grid">

              {imagingTests.map((test) => (

                <div
                  key={test.id}
                  className={`imaging-test-card ${
                    selectedTest === test.name
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedTest(test.name)
                  }
                >

                  <div className="test-icon">
                    🩻
                  </div>

                  <h3>{test.name}</h3>

                  <p>
                    {test.description}
                  </p>

                  <span>
                    Duration: {test.duration}
                  </span>

                </div>

              ))}

            </div>

          </section>


          {/* Step 2 */}
          <section className="booking-section">

            <h2>2. Select Date</h2>

            <div className="date-grid">

              {dates.map((date) => (

                <button
                  type="button"
                  key={date}
                  className={`date-button ${
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
                      day: "numeric",
                      month: "short",
                    }
                  )}
                </button>

              ))}

            </div>

          </section>


          {/* Step 3 */}
          <section className="booking-section">

            <h2>3. Select Time</h2>

            <div className="time-grid">

              {timeSlots.map((time) => (

                <button
                  type="button"
                  key={time}
                  className={`time-button ${
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
          <section className="booking-summary">

            <h2>Booking Summary</h2>

            <div className="summary-row">

              <span>
                Imaging Test
              </span>

              <strong>
                {selectedTest || "Not selected"}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                Date
              </span>

              <strong>
                {selectedDate || "Not selected"}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                Time
              </span>

              <strong>
                {selectedTime || "Not selected"}
              </strong>

            </div>

            {selectedTestDetails && (

              <div className="summary-description">

                <p>
                  {selectedTestDetails.description}
                </p>

              </div>

            )}

          </section>


          {/* Confirm Button */}
          <div className="booking-actions">

            <button
              type="submit"
              className="confirm-button"
            >
              Confirm Imaging Booking
            </button>

          </div>

        </form>

      ) : (

        /* Confirmation Page */

        <div className="confirmation-card">

          <div className="success-icon">
            ✓
          </div>

          <h2>
            Imaging Booking Confirmed!
          </h2>

          <p>
            Your imaging service has been
            successfully scheduled.
          </p>


          <div className="confirmation-details">

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


          <div className="confirmation-actions">

            <button
              className="primary-button"
              onClick={handleViewAppointments}
            >
              View My Appointments
            </button>

            <button
              className="secondary-button"
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

export default ImagingBooking;