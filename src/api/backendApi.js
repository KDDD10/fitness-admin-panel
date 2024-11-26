import axios from "axios";
const api = axios.create({
  baseURL: "https://python-ecommerce-589e268bd578.herokuapp.com/api", // Replace with your actual base URL
});

// Authentication
export const login = async (data) => {
  try {
    const response = await api.post("/login/", data);
    if (response.status === 200) {
      return response;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};
export const getAllPlans = async () => {
  try {
    const response = await api.get("/plans/");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};
export const getAllCategories = async () => {
  try {
    const response = await api.get("/category/");
    if (response.data) {
      return response;
    } else {
      throw new Error("Error while Loading");
    }
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products/");
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Error while Loading");
    }
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const getAllSubscriptionPlans = async () => {
  try {
    const response = await api.get("/subscription-plans/");
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Error while Loading");
    }
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

// Fetch all goals for a specific plan
export const getGoalsByPlan = async (planId) => {
  try {
    const response = await api.get(`/goals/plan/${planId}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Failed to fetch goals");
  }
};
