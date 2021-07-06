import "./ButtonBox.css";

const ButtonBox = ({ description, version, hasStyle, solid }) => {
  return (
    <div className={hasStyle ? `buttonBox ${solid}` : `buttonBox`}>
      <div className="buttonBox__info">
        <p>{description}</p>
        <p className="buttonBox__version">{version && `v ${version}`}</p>
      </div>
    </div>
  );
};

export default ButtonBox;
