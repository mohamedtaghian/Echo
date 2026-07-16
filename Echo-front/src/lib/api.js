import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

export const getPost = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

export const createPost = async (post) => {
  const res = await api.post("/posts", post, {
    headers: getAuthHeaders(),
  });
  return res.data;
};

export const updatePost = async ({ id, data }) => {
  const res = await api.patch(`/posts/${id}`, data, {
    headers: getAuthHeaders(),
  });
  return res.data;
};

export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`, {
    headers: getAuthHeaders(),
  });
  return res.data;
};

export const login = async (data) => {
  const res = await api.post("/login", data);
  return res.data;
};

export const register = async (data) => {
  const res = await api.post("/register", data);
  return res.data;
};
