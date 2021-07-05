import ButtonBox from "../../ButtonBox";
import "./Project.css";

const Project = ({ projects }) => {
  return (
    <div className="project">
      {projects.map((project) => (
        <ButtonBox
          key={project.id}
          isDashed={true}
          description={project.name}
          version={project.version}
        />
      ))}
    </div>
  );
};

export default Project;
