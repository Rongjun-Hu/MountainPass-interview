import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
  },
});

// const authToken = "cGV0ZXI6QXFRSw==";

export const getAllProjects = (page) => API.get(`?page=${page}`);
export const createProject = (newProject) => API.post("/", newProject);
