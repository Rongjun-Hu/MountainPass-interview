import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
  },
});

export const getAllProjects = (page) => API.get(`${API.baseURL}?page=${page}`);
export const createProject = (newProject) => API.post(API.baseURL, newProject);
