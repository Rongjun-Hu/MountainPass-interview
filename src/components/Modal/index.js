import { useState } from "react";
import Buttons from "../../components/Buttons";
import { TextField } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "../../actions/projects";
import { useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import "./Modal.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Modal = ({ closeModal, page, openModal }) => {
  const [projectData, setProjectData] = useState({
    name: "",
    version: "",
  });
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = {
      name: projectData.name,
      version: projectData.version,
    };

    const { data } = await axios.post(
      "https://interview-web-service.mountainpass.com.au/api/v1/projects",
      newProject,
      {
        headers: {
          Authorization: `Basic ${process.send.REACT_APP_AUTH}`,
          "Content-type": "application/json",
        },
      }
    );

    console.log(data);
    setOpen(true);
    // dispatch(
    //   createNewProject({
    //     ...projectData,
    //     newProject,
    //   })
    // );

    setTimeout(() => {
      closeModal();
    }, 2000);
    clear();
    dispatch(getProjects(page));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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

            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                style={{ marginBottom: "1rem" }}
                error={projectData.name === ""}
                autoFocus={true}
                name="name"
                label="Name"
                variant="outlined"
                helperText="Name fileld is required"
                size="small"
                value={projectData.name}
                onChange={(e) =>
                  setProjectData({ ...projectData, name: e.target.value })
                }
                required
              />
              <TextField
                name="version"
                label="Version"
                variant="outlined"
                size="small"
                helperText="Version fileld is required"
                error={projectData.version === ""}
                value={projectData.version}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    version: e.target.value,
                  })
                }
                required
              />
              <div className="form__buttons">
                <Buttons
                  name="Add Service"
                  // hover={true}
                />
                <Buttons
                  name="Cancel"
                  type="button"
                  handleClick={closeModal}
                  style={{ backgroundColor: "grey" }}
                />
              </div>
            </form>
          </div>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Add Service Successful!
            </Alert>
          </Snackbar>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
