import axios from "axios";

const api = axios.create({
  baseURL: "https://likelion2026.pythonanywhere.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;