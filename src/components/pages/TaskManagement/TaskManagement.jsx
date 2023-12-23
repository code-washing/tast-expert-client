// component
import TaskCount from "./TaskCount/TaskCount";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import AllTasksContainer from "./AllTasksContainer/AllTasksContainer";

// hook
import useTasks from "../../../hooks/useTasks";

const TaskManagement = () => {
  const { separateTasksByStatus } = useTasks();

  return (
    <div className="space-y-elementGapSm">
      {/* task count */}
      <section>
        <InnerContainer>
          <TaskCount tasksData={separateTasksByStatus} />
        </InnerContainer>
      </section>

      {/* task count */}
      <section>
        <InnerContainer>
          <AllTasksContainer />
        </InnerContainer>
      </section>
    </div>
  );
};

export default TaskManagement;
