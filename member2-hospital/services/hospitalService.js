import { apiFetch } from "../../apiClient";
// ==========================================
// Hospital Service
// Handles hospital, department and doctor APIs
// ==========================================

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Get all hospitals
export const getHospitals = async () => {
  try {
    const response = await apiFetch(`${API_BASE_URL}/hospitals`);

    if (!response.ok) {
      throw new Error("Failed to fetch hospitals");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getHospitals error:", error);
    throw error;
  }
};


// Get hospital by ID
export const getHospitalById = async (hospitalId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/hospitals/${hospitalId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch hospital details");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getHospitalById error:", error);
    throw error;
  }
};


// Get departments of a hospital
export const getDepartments = async (hospitalId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/hospitals/${hospitalId}/departments`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch departments");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getDepartments error:", error);
    throw error;
  }
};


// Get doctors of a department
export const getDoctors = async (departmentId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/departments/${departmentId}/doctors`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch doctors");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getDoctors error:", error);
    throw error;
  }
};


// Get services of a hospital
export const getHospitalServices = async (hospitalId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/hospitals/${hospitalId}/services`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch hospital services");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getHospitalServices error:", error);
    throw error;
  }
};


// Get doctor details
export const getDoctorById = async (doctorId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/doctors/${doctorId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch doctor details");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getDoctorById error:", error);
    throw error;
  }
};