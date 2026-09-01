import { apiFetch } from "../../apiClient";
const API_BASE_URL = `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/reception`;


/* =========================
   RECEPTION LOGIN
========================= */

export const receptionLogin = async (
  username,
  password
) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Reception login failed"
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Reception Login Error:",
      error
    );

    throw error;
  }
};


/* =========================
   GET APPOINTMENTS
========================= */

export const getAppointments = async () => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/appointments`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to fetch appointments"
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Get Appointments Error:",
      error
    );

    throw error;
  }
};


/* =========================
   UPDATE APPOINTMENT
========================= */

export const updateAppointment = async (
  appointmentId,
  appointmentData
) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/appointments/${appointmentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to update appointment"
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Update Appointment Error:",
      error
    );

    throw error;
  }
};


/* =========================
   GET PATIENTS
========================= */

export const getPatients = async () => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/patients`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to fetch patients"
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Get Patients Error:",
      error
    );

    throw error;
  }
};


/* =========================
   SEARCH PATIENT
========================= */

export const searchPatient = async (query) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/patients/search?query=${encodeURIComponent(
        query
      )}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to search patient"
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Search Patient Error:",
      error
    );

    throw error;
  }
};


/* =========================
   WALK-IN REGISTRATION
========================= */

export const registerWalkIn = async (
  patientData
) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/walk-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Walk-in registration failed"
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Walk-in Registration Error:",
      error
    );

    throw error;
  }
};


/* =========================
   CHECK IN PATIENT
========================= */

export const checkInPatient = async (
  appointmentId
) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/appointments/${appointmentId}/check-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Patient check-in failed"
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Patient Check-in Error:",
      error
    );

    throw error;
  }
};