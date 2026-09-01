import { apiFetch } from "../../apiClient";
const API_BASE_URL = `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/doctor`;

/* =========================
   DOCTOR LOGIN
========================= */

export const doctorLogin = async (doctorId, password) => {
  try {
    const response = await apiFetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doctorId,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Doctor login failed"
      );
    }

    return data;
  } catch (error) {
    console.error("Doctor Login Error:", error);
    throw error;
  }
};


/* =========================
   GET DOCTOR PROFILE
========================= */

export const getDoctorProfile = async (doctorId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/${doctorId}/profile`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch doctor profile"
      );
    }

    return data;
  } catch (error) {
    console.error("Doctor Profile Error:", error);
    throw error;
  }
};


/* =========================
   GET TODAY'S PATIENTS
========================= */

export const getTodayPatients = async (doctorId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/${doctorId}/patients/today`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch today's patients"
      );
    }

    return data;
  } catch (error) {
    console.error("Today's Patients Error:", error);
    throw error;
  }
};


/* =========================
   GET DOCTOR QUEUE
========================= */

export const getDoctorQueue = async (doctorId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/${doctorId}/queue`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch doctor queue"
      );
    }

    return data;
  } catch (error) {
    console.error("Doctor Queue Error:", error);
    throw error;
  }
};


/* =========================
   START CONSULTATION
========================= */

export const startConsultation = async (
  appointmentId
) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/consultation/start`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointmentId,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to start consultation"
      );
    }

    return data;
  } catch (error) {
    console.error("Start Consultation Error:", error);
    throw error;
  }
};


/* =========================
   COMPLETE CONSULTATION
========================= */

export const completeConsultation = async (
  appointmentId,
  consultationData
) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/consultation/complete`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointmentId,
          ...consultationData,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Failed to complete consultation"
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Complete Consultation Error:",
      error
    );

    throw error;
  }
};