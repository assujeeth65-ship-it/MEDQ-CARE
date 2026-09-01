import { apiFetch } from "../../apiClient";
const API_BASE_URL = `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/admin`;

/* =========================
   ADMIN LOGIN
========================= */

export const adminLogin = async (username, password) => {
  try {
    const response = await apiFetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Admin login failed");
    }

    return data;
  } catch (error) {
    console.error("Admin Login Error:", error);
    throw error;
  }
};


/* =========================
   GET HOSPITALS
========================= */

export const getHospitals = async () => {
  try {
    const response = await apiFetch(`${API_BASE_URL}/hospitals`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch hospitals");
    }

    return data;
  } catch (error) {
    console.error("Get Hospitals Error:", error);
    throw error;
  }
};


/* =========================
   GET DEPARTMENTS
========================= */

export const getDepartments = async () => {
  try {
    const response = await apiFetch(`${API_BASE_URL}/departments`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch departments"
      );
    }

    return data;
  } catch (error) {
    console.error("Get Departments Error:", error);
    throw error;
  }
};


/* =========================
   CREATE DEPARTMENT
========================= */

export const createDepartment = async (departmentData) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/departments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(departmentData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to create department"
      );
    }

    return data;
  } catch (error) {
    console.error("Create Department Error:", error);
    throw error;
  }
};


/* =========================
   UPDATE DEPARTMENT
========================= */

export const updateDepartment = async (
  departmentId,
  departmentData
) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/departments/${departmentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(departmentData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to update department"
      );
    }

    return data;
  } catch (error) {
    console.error("Update Department Error:", error);
    throw error;
  }
};


/* =========================
   DELETE DEPARTMENT
========================= */

export const deleteDepartment = async (departmentId) => {
  try {
    const response = await apiFetch(
      `${API_BASE_URL}/departments/${departmentId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to delete department"
      );
    }

    return data;
  } catch (error) {
    console.error("Delete Department Error:", error);
    throw error;
  }
};

/* =========================
   SAVE ADMIN AUTH DATA
========================= */
export const saveAuthData = (data) => {
  if (data?.token) localStorage.setItem("token", data.token);
  if (data?.user) localStorage.setItem("user", JSON.stringify(data.user));
};
