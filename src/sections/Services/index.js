import Buttons from "../../components/Buttons";
import Projects from "../../components/Projects";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services__input">
        <input type="text" placeholder="Filter" />
        <Buttons name="ADD SERVICE" />
      </div>
      <div className="services__projectList">
        <Projects />
      </div>
    </div>
  );
};

export default Services;
