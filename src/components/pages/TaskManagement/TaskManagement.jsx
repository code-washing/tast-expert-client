// component
import TaskCount from "./TaskCount/TaskCount";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import AllTasksContainer from "./AllTasksContainer/AllTasksContainer";
import CreateTaskForm from "./CreateTaskForm/CreateTaskForm";

// hook
import useTasks from "../../../hooks/useTasks";
import useTaskSeparator from "../../../hooks/useTaskSeparator";
import useTasksQuery from "../../../hooks/useTasksQuery";

// provider
import DragDropProvider from "../../../providers/DragDropProvider";

// redux
import { useSelector } from "react-redux";

const TaskManagement = () => {
  const { closeCreateForm, sortToLatest } = useTasks();
  useTasksQuery();
  const { tasks, createFormOpen } = useSelector((store) => store.task);

  const { getSeparateTasksObject } = useTaskSeparator();

  const tasksByStatus = tasks && getSeparateTasksObject(sortToLatest(tasks));

  return (
    <div className="space-y-elementGapSm mb-sectionGapMd">
      {/* task count */}
      <section>
        <InnerContainer>
          <div className="flex flex-col-reverse gap-elementGapMd">
            <TaskCount tasksData={tasksByStatus} />
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
          <DragDropProvider>
            <AllTasksContainer tasksData={tasksByStatus} />
          </DragDropProvider>
        </InnerContainer>
      </section>
    </div>
  );
};

export default TaskManagement;
