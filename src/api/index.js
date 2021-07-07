import axios from "axios";

const API = axios.create({
  baseURL: "https://interview-web-service.mountainpass.com.au/api/v1",
});

// const authToken = "cGV0ZXI6QXFRSw==";

export const getAllProjects = (page) =>
  API.get(`/projects?page=${page}`, {
    headers: {
      Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
    },
  });
export const createProject = (newProject) =>
  API.post("/projects", newProject, {
    headers: {
      Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
    },
  });
