import axios from "axios";

const api = axios.create({
  baseURL: "https://python-ecommerce-589e268bd578.herokuapp.com/api",
  headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
});

// Categories

export const createCategory = (data) => api.post("/category/", data);
export const updateCategory = (id, data) => api.put(`/category/${id}/`, data);
export const deleteCategory = (id) => api.delete(`/category/${id}/`);

// Create a new product
export const createProduct = async (productData) => {
  const response = await api.post("/products/create/", productData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update a product
export const updateProduct = async (id, productData) => {
  const response = await api.patch(`/products/update/${id}/`, productData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete a product
export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}/`);
  return response.data;
};

// Inventory
export const getInventory = async () => {
  const response = await api.get("/products/inventory/");
  console.log(response.data);
  return response.data;
};

// Update inventory quantity
export const updateInventory = async (product, quantity) => {
  const response = await api.post("/products/inventory/update/", {
    product,
    quantity,
  });
  return response.data;
};
export const createPlan = async (planData) => {
  try {
    const response = await api.post("/plans/", planData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

// Update a plan
export const updatePlan = async (id, planData) => {
  const response = await api.patch(`/plans/${id}/`, planData);
  return response.data;
};

// Delete a plan
export const deletePlan = async (id) => {
  const response = await api.delete(`/plans/${id}/`);
  return response.data;
};
export const getAllUsers = async () => {
  const response = await api.get("/users/");
  return response.data;
};

// Subscription Plans
export const createSubscriptionPlan = async (planData) => {
  const response = await api.post("/subscription-plans/", planData);
  return response.data;
};

// Update a subscription plan
export const updateSubscriptionPlan = async (id, planData) => {
  const response = await api.patch(`/subscription-plans/${id}/`, planData);
  return response.data;
};

// Delete a subscription plan
export const deleteSubscriptionPlan = async (id) => {
  const response = await api.delete(`/subscription-plans/${id}/`);
  return response.data;
};
// Create a new goal
export const createGoal = async (goalData) => {
  console.log(goalData);
  try {
    const response = await api.post(`/goals/`, goalData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Failed to create goal");
  }
};

// Update an existing goal
export const updateGoal = async (goalId, goalData) => {
  try {
    const response = await api.patch(`/goals/${goalId}/update/`, goalData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Failed to update goal");
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const response = await api.delete(`/goals/${goalId}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Failed to delete goal");
  }
};
