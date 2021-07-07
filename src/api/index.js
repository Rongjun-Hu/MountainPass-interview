import axios from "axios";

const API = axios.create({
  baseURL: "https://interview-web-service.mountainpass.com.au/api/v1",
  headers: {
    Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

// const authToken = "cGV0ZXI6QXFRSw==";

export const getAllProjects = (page) => API.get(`/projects?page=${page}`);
export const createProject = (newProject) => API.post("/projects", newProject);
