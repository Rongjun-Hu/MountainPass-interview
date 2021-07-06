import { useState, useEffect } from "react";
import Project from "./Project";
import axios from "axios";
import "./Projects.css";
import ButtonBox from "../ButtonBox";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const getAllProjects = async () => {
    const { data } = await axios.get(process.env.REACT_APP_BASE_URL, {
      headers: {
        Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
      },
    });

    setProjects(data.data);
    console.log(data);
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="projects">
      <Project projects={projects} />
      <div className="projects__button">
        <button>Add Service</button>
      </div>
    </div>
  );
};

export default Projects;
