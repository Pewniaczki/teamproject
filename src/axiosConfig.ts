import axios from "axios";

const BACKEND_LOGIN_URL = import.meta.env.VITE_BACKEND_LOGIN_URL;
const BACKEND_PEWNIACZKI_URL = import.meta.env.VITE_BACKEND_PEWNIACZKI;

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
