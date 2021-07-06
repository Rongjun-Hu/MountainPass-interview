import { useState } from "react";
import Buttons from "../../components/Buttons";
import { TextField } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

const Modal = ({ closeModal, getAllProjects, openModal }) => {
  const [name, setName] = useState("");
  const [version, setVersion] = useState("");

  const createProject = async (e) => {
    e.preventDefault();

    const newProject = {
      name: name,
      version: version,
    };

    const { data } = await axios.post(
      process.env.REACT_APP_BASE_URL,
      newProject,
      {
        headers: {
          Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
        },
      }
    );
    console.log(data.message);
    setName("");
    setVersion("");
    alert("Success");
    getAllProjects();
    closeModal();
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
              {/* <button >X</button> */}
            </div>

            <form onSubmit={createProject}>
              <TextField
                style={{ marginBottom: "1rem" }}
                name="name"
                label="Name"
                variant="outlined"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                name="version"
                label="Version"
                variant="outlined"
                size="small"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
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
