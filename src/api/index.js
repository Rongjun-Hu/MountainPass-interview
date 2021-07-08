import axios from "axios";

const API = axios.create({
  baseURL: "https://interview-web-service.mountainpass.com.au/api/v1",
  headers: {
    Authorization: `Basic cGV0ZXI6QXFRSw==`,
  },
});

// const authToken = "cGV0ZXI6QXFRSw==";

export const getAllProjects = (page) => API.get(`/projects?page=${page}`);
export const createProject = (newProject) => API.post("/projects", newProject);
