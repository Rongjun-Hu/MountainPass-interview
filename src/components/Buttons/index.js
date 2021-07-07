import "./Buttons.css";

const Buttons = ({ name, type, handleClick, style }) => {
  return (
    <button className="buttons" type={type} onClick={handleClick} style={style}>
      {name}
    </button>
  );
};

export default Buttons;
