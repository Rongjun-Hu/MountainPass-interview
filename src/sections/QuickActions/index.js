import ButtonBox from "../../components/ButtonBox";
import "./quick-actions.css";

const QuickActions = () => {
  return (
    <div className="quickActions">
      <h1>Quick Actions</h1>
      <div className="quickActions__buttonContainer">
        <ButtonBox description="Add Service" isDashed={true} />
        <ButtonBox description="Deploy Gatsby Website" isDashed={true} />
        <ButtonBox description="Deploy Node Project" />
      </div>
    </div>
  );
};

export default QuickActions;
