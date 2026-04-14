import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/service",
  timeout: 1000,
  headers: {
    Accept: "Application/json",
  },
});

API.interceptors.request.use((config) => {
  const storage = localStorage.getItem("token");
  const token = JSON.stringify(storage);

  if (token) {
    config.headers.authorization = token;
  }

  return config;
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      await localStorage.removeItem("token");
      window.location.href = "/";
      return;
    }
  },
);

export default API;
