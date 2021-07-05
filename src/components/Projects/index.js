import { useState, useEffect } from "react";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const getAllProjects = async () => {};

  return (
    <div className="projects">
      <Project projects={projects} />
    </div>
  );
};

export default Projects;
