import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Basic ${process.send.REACT_APP_AUTH}`,
  },
});

export const getAllProjects = (page) => API.get(`/projects?page=${page}`);
export const createProject = (newProject) => API.post("/projects", newProject);
