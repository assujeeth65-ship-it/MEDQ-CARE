import { apiFetch } from "../../apiClient";
// ==========================================
// Diagnostic Service
// Handles laboratory and imaging APIs
// ==========================================

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";


// ==========================================
// LABORATORY
// ==========================================

// Get laboratory tests
export const getLabTests = async () => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/diagnostics/lab`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch laboratory tests");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getLabTests error:", error);
    throw error;
  }
};


// Book laboratory test
export const bookLabTest = async (labData) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/diagnostics/lab`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(labData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to book laboratory test");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("bookLabTest error:", error);
    throw error;
  }
};


// Get laboratory reports
export const getLabReports = async (patientId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/diagnostics/lab/reports/${patientId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch laboratory reports");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getLabReports error:", error);
    throw error;
  }
};


// ==========================================
// IMAGING
// ==========================================

// Get imaging services
export const getImagingServices = async () => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/diagnostics/imaging`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch imaging services");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getImagingServices error:", error);
    throw error;
  }
};


// Book imaging test
export const bookImagingTest = async (imagingData) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/diagnostics/imaging`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(imagingData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to book imaging test");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("bookImagingTest error:", error);
    throw error;
  }
};


// Get imaging reports
export const getImagingReports = async (patientId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/diagnostics/imaging/reports/${patientId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch imaging reports");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getImagingReports error:", error);
    throw error;
  }
};


// ==========================================
// ALL DIAGNOSTIC REPORTS
// ==========================================

export const getAllReports = async (patientId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/diagnostics/reports/${patientId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reports");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("getAllReports error:", error);
    throw error;
  }
};