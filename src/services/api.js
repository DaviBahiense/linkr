import axios from "axios";

export const BASE_URL = "http://localhost:5000";

/* function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
} */

function signup(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/`, body);

  return promise;
}

const api = {
  signup,
  login

};

export default api;
