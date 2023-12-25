// component
import TaskCount from "./TaskCount/TaskCount";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import AllTasksContainer from "./AllTasksContainer/AllTasksContainer";
import CreateBtn from "../../shared/CreateBtn/CreateBtn";
import CreateTaskForm from "./CreateTaskForm/CreateTaskForm";

// hook
import useTasks from "../../../hooks/useTasks";

const TaskManagement = () => {
  const {
    separateTasksByStatus,
    createFormOpen,
    openCreateForm,
    closeCreateForm,
  } = useTasks();

  return (
    <div className="space-y-elementGapSm mb-sectionGapMd">
      {/* task count */}
      <section>
        <InnerContainer>
          <div className="grid grid-cols-1 gap-elementGapSm">
            <TaskCount tasksData={separateTasksByStatus} />
            <div>
              <CreateBtn text="add new task" onClickFunction={openCreateForm} />
            </div>
          </div>
        </InnerContainer>
      </section>

      {/* create task form */}
      <CreateTaskForm
        openState={createFormOpen}
        closeFunction={closeCreateForm}
      />

      {/* task count */}
      <section>
        <InnerContainer>
          <AllTasksContainer tasksData={separateTasksByStatus} />
        </InnerContainer>
      </section>
    </div>
  );
};

export default TaskManagement;
