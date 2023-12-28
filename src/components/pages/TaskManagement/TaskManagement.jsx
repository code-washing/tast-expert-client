// component
import TaskCount from "./TaskCount/TaskCount";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import AllTasksContainer from "./AllTasksContainer/AllTasksContainer";
import CreateBtn from "../../shared/CreateBtn/CreateBtn";
import CreateTaskForm from "./CreateTaskForm/CreateTaskForm";

// hook
import useTasks from "../../../hooks/useTasks";

import useTaskSeparator from "../../../hooks/useTaskSeparator";
import useTasksQuery from "../../../hooks/useTasksQuery";

// redux
import { useSelector } from "react-redux";

const TaskManagement = () => {
  const { openCreateForm, closeCreateForm, sortToLatest } = useTasks();
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
            <div>
              <TaskCount tasksData={tasksByStatus} />
              <div className="mt-elementGapSm">
                <CreateBtn
                  text="add new task"
                  onClickFunction={openCreateForm}
                />
              </div>
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
          <AllTasksContainer tasksData={tasksByStatus} />
        </InnerContainer>
      </section>
    </div>
  );
};

export default TaskManagement;
