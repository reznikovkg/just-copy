import axios from "axios";

export const API_URL = "http://localhost:4444";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
