import axios from "axios";

export const BASE_URL = "http://localhost:5000";

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

function postLike(token, id, type) {
  return axios.post(`${BASE_URL}/likes/${id}/${type}`, {}, createConfig(token));
}

function getLikes(token, id){
  return axios.get(`${BASE_URL}/likes/${id}`, createConfig(token));
}

const api = {
  signup,
  login,
  getUser,
  getPosts,
  sendPost,
  postLike,
  getLikes
};

export default api;
