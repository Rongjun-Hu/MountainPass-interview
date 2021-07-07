import { forwardRef } from "react";
import Project from "./Project";
import "./Projects.css";

const Projects = forwardRef(({ projects, filterProjects }, ref) => {
  return (
    <div ref={ref} className="projects">
      <Project projects={projects} filterProjects={filterProjects} />
      <div className="projects__button">
        <button>Add Service</button>
      </div>
    </div>
  );
});

export default Projects;
