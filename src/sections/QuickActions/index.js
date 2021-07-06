import ButtonBox from "../../components/ButtonBox";
import "./quick-actions.css";

const QuickActions = () => {
  return (
    <div className="quickActions">
      <h1>Quick Actions</h1>
      <div className="quickActions__buttonContainer">
        <ButtonBox
          description="Add Service"
          hasStyle={true}
          solid="buttonBox--dashed"
        />
        <ButtonBox
          description="Deploy Gatsby Website"
          hasStyle={true}
          solid="buttonBox--dashed"
        />
        <ButtonBox description="Deploy Node Project" />
      </div>
    </div>
  );
};

export default QuickActions;
