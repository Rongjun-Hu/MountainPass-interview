import "./ButtonBox.css";

const ButtonBox = ({ description, version, isDashed }) => {
  return (
    <div className={isDashed ? "buttonBox buttonBox--dashed" : "buttonBox"}>
      <div className="buttonBox__info">
        <p>{description}</p>
        <p className="buttonBox__version">{version}</p>
      </div>
    </div>
  );
};

export default ButtonBox;
