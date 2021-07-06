import { useEffect, useState } from "react";
import Buttons from "../../components/Buttons";
import Modal from "../../components/Modal";
import Projects from "../../components/Projects";
import { Pagination } from "@material-ui/lab";
import { Search } from "@material-ui/icons";
import axios from "axios";
import "./services.css";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPage, setTotalPage] = useState(0);

  const getAllProjects = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}?page=1`,
      {
        headers: {
          Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
        },
      }
    );

    setProjects(data.data);
    setTotalPage(data.totalPages);
    console.log(data);
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  const filterProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  });

  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services__input">
        <Search />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Project"
        />
        <Buttons name="ADD SERVICE" showModal={() => setOpenModal(true)} />
      </div>
      <div className="services__projectList">
        <Projects
          projects={filterProjects}
          getAllProjects={getAllProjects}
          term={searchTerm}
        />
      </div>
      <br />

      <Pagination
        defaultPage={1}
        count={totalPage}
        style={{ margin: "0 auto" }}
      />

      <Modal
        openModal={openModal}
        getAllProjects={getAllProjects}
        closeModal={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Services;
