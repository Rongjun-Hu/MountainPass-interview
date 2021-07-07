import axios from "axios";

const API = axios.create({
  baseURL: "https://interview-web-service.mountainpass.com.au/api/v1/projects",
  headers: {
    Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
  },
});

// const authToken = "cGV0ZXI6QXFRSw==";

export const getAllProjects = (page) => API.get(`?page=${page}`);
export const createProject = (newProject) => API.post("/", newProject);
