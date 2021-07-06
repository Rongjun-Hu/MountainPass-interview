import { useEffect, useState } from "react";
import Buttons from "../../components/Buttons";
import Modal from "../../components/Modal";
import Projects from "../../components/Projects";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import "./services.css";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
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
    <div className="services">
      <h1>Services</h1>
      <div className="services__input">
        <input type="text" placeholder="Filter" />
        <Buttons name="ADD SERVICE" showModal={() => setOpenModal(true)} />
      </div>
      <div className="services__projectList">
        <Projects projects={projects} />
      </div>
      <br />
      <Pagination style={{ margin: "0 auto" }} />
      {openModal && (
        <Modal
          getAllProjects={getAllProjects}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default Services;
