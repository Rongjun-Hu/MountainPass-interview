import "./Buttons.css";

const Buttons = ({ name, showModal }) => {
  return (
    <button className="buttons" onClick={showModal}>
      {name}
    </button>
  );
};

export default Buttons;
