import { useEffect, useState } from "react";
import Buttons from "../../components/Buttons";
import Modal from "../../components/Modal";
import Projects from "../../components/Projects";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Search } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProjects } from "../../actions/projects";
import { Link } from "react-router-dom";
import "./services.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const qurey = useQuery();
  const page = qurey.get("page") || 1;
  const { projects, totalPages } = useSelector((state) => state.projects);

  // console.log(projects);

  useEffect(() => {
    if (page) dispatch(getProjects(page));
  }, [page]);

  const filterProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  });

  // console.log(filterProjects);

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
        <Projects projects={filterProjects} term={searchTerm} />
      </div>
      <br />

      <Pagination
        defaultPage={1}
        count={totalPages}
        page={Number(page) || 1}
        style={{ margin: "0 auto" }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={Link}
            to={`/projects?page=${item.page}`}
          />
        )}
      />

      <Modal
        openModal={openModal}
        page={page}
        closeModal={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Services;
