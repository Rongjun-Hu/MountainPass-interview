import ButtonBox from "../../ButtonBox";
import "./Project.css";

const Project = ({ projects }) => {
  return (
    <div className="project">
      {projects.map((project) => (
        <div className="project__item" key={project.id}>
          <ButtonBox
            solid="buttonBox--success"
            hasStyle={true}
            description={project.name}
            version={project.version}
          />
        </div>
      ))}
    </div>
  );
};

export default Project;
