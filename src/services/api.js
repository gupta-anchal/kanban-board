// src/services/api.js
import axios from 'axios';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchTickets = async () => {
  const response = await axios.get(API_URL);
  console.log("response", response);
  return response.data.tickets;
};
