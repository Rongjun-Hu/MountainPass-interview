import ButtonBox from "../../ButtonBox";
import FlipMove from "react-flip-move";
import "./Project.css";

const Project = ({ projects }) => {
  return (
    <>
      <FlipMove className="project">
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
      </FlipMove>
    </>
  );
};

export default Project;
