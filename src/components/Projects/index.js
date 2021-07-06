import Project from "./Project";
import "./Projects.css";

const Projects = ({ projects }) => {
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
