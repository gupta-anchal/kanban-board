// src/utils/api.js
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return null;
  }
};

const API_BASE_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const fetchTickets = async () => {
  const data = await fetchData(API_BASE_URL);
  return data ? data.tickets : [];
};

export const fetchUsers = async () => {
  const data = await fetchData(API_BASE_URL);
  return data ? data.users : [];
};
