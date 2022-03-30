import axios from "axios";

export const BASE_URL =
  "http://localhost:5000" || "https://linkrr.herokuapp.com";

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

function getPostsFromATag(token, tag) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/hashtags/${tag}`, config);

  return promise;
}

function getTrendingTags(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/hashtags`, config);

  return promise;
}

function deletePost(id, token) {
  const config = createConfig(token);
  const promise = axios.delete(`${BASE_URL}/posts/${id}`, config);
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

function getLikes(token, id) {
  return axios.get(`${BASE_URL}/likes/${id}`, createConfig(token));
}

function editPost(data, token) {
  const config = createConfig(token);
  const promise = axios.put(`${BASE_URL}/posts`, data, config);
  return promise;
}

function getUserId(token, id) {
  return axios.get(`${BASE_URL}/users/${id}`, createConfig(token));
}

function getSearchBarResults(token, search) {
  const config = createConfig(token);
  const result = axios.get(`${BASE_URL}/search/${search}`, config);
  return result;
}

function createComment(body, token) {
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/comment`, body, config);

  return promise;
}

function getComments(postId) {
  return axios.get(`${BASE_URL}/comment/${postId}`);
}

function postFollow(token, id, type) {
  return axios.post(
    `${BASE_URL}/follows/${id}/${type}`,
    {},
    createConfig(token)
  );
}

function getFollow(token, id) {
  return axios.get(`${BASE_URL}/follows/${id}`, createConfig(token));
}

const api = {
  signup,
  login,
  getUser,
  getPosts,
  getPostsFromATag,
  sendPost,
  postLike,
  getLikes,
  editPost,
  getUserId,
  deletePost,
  getTrendingTags,
  getSearchBarResults,
  createComment,
  getComments,
  postFollow,
  getFollow,
};

export default api;
