import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});

export default API;
