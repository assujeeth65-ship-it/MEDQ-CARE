import { apiFetch } from "../../apiClient";
// ==========================================
// Appointment Service
// Handles appointment-related API requests
// ==========================================

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";


// Create a new appointment
export const createAppointment = async (appointmentData) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/appointments`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(appointmentData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create appointment");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("createAppointment error:", error);
    throw error;
  }
};


// Get patient appointments
export const getMyAppointments = async (patientId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/appointments/patient/${patientId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch appointments");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getMyAppointments error:", error);
    throw error;
  }
};


// Get appointment by ID
export const getAppointmentById = async (appointmentId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/appointments/${appointmentId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch appointment");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getAppointmentById error:", error);
    throw error;
  }
};


// Cancel appointment
export const cancelAppointment = async (appointmentId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/appointments/${appointmentId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to cancel appointment");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("cancelAppointment error:", error);
    throw error;
  }
};


// Update appointment
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

    if (!response.ok) {
      throw new Error("Failed to update appointment");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("updateAppointment error:", error);
    throw error;
  }
};


// Get available time slots
export const getAvailableSlots = async (
  doctorId,
  date
) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/appointments/slots?doctorId=${doctorId}&date=${date}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch available slots");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getAvailableSlots error:", error);
    throw error;
  }
};