import { useState } from "react";
import Buttons from "../../components/Buttons";
import axios from "axios";
import "./Modal.css";

const Modal = ({ closeModal, getAllProjects }) => {
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
    console.log(data);
    setName("");
    setVersion("");
    getAllProjects();
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__header">
          <h1>Add Service</h1>
          <button onClick={closeModal}>X</button>
        </div>

        <form onSubmit={createProject}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            placeholder="Version"
          />
          <Buttons name="Add Service" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
