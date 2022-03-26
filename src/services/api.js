import axios from "axios";

export const BASE_URL = "https://linkrr.herokuapp.com";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signup(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/`, body);

  return promise;
}

function getUser(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/home`, config);

  return promise;
}

function getPosts(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/posts`, config);
  return promise;
}

function sendPost(data, token) {
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/posts`, data, config);
  return promise;
}

function editPost(data, token) {
  const config = createConfig(token);
  const promise = axios.put(`${BASE_URL}/posts`, data, config);
  return promise;
}

const api = {
  signup,
  login,
  getUser,
  getPosts,
  sendPost,
  editPost,
};

export default api;
