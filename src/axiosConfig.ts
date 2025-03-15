import axios from "axios";

const BACKEND_LOGIN_URL = import.meta.env.VITE_BACKEND_LOGIN_URL || "http://localhost:3000";
const BACKEND_PEWNIACZKI_URL = import.meta.env.VITE_BACKEND_PEWNIACZKI || "http://localhost:5000";

export const apiLogin = axios.create({
  baseURL: BACKEND_LOGIN_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiPewniaczki = axios.create({
  baseURL: BACKEND_PEWNIACZKI_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
