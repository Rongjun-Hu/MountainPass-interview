import { useState } from "react";
import Buttons from "../../components/Buttons";
import { TextField } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects, createProject } from "../../actions/projects";
import { useDispatch } from "react-redux";
import "./Modal.css";

const Modal = ({ closeModal, page, openModal }) => {
  const [projectData, setProjectData] = useState({
    name: "",
    version: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = {
      name: projectData.name,
      version: projectData.version,
    };

    dispatch(createProject({ ...projectData, newProject }));
    clear();
    alert("Success");
    dispatch(getProjects(page));
    closeModal();
  };

  const clear = () => {
    setProjectData({
      name: "",
      version: "",
    });
  };

  const variants = {
    hidden: { opacity: 0 },
    visiable: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          initial="hidden"
          exit="hidden"
          animate="visiable"
          variants={variants}
          className="modal"
        >
          <div className="modal__container">
            <div className="modal__header">
              <h1>Add Service</h1>
              <Close onClick={closeModal} style={{ cursor: "pointer" }} />
            </div>

            <form onSubmit={handleSubmit}>
              <TextField
                style={{ marginBottom: "1rem" }}
                name="name"
                label="Name"
                variant="outlined"
                size="small"
                value={projectData.name}
                onChange={(e) =>
                  setProjectData({ ...projectData, name: e.target.value })
                }
              />
              <TextField
                name="version"
                label="Version"
                variant="outlined"
                size="small"
                value={projectData.version}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    version: e.target.value,
                  })
                }
              />
              <Buttons name="Add Service" />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
