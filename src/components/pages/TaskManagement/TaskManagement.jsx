// component
import TaskCount from "./TaskCount/TaskCount";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

const TaskManagement = () => {
  return (
    <div className="space-y-elementGapSm">
      <section>
        <InnerContainer>
          <TaskCount />
        </InnerContainer>
      </section>
    </div>
  );
};

export default TaskManagement;
