// component
import TaskCount from "./TaskCount/TaskCount";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import AllTasksContainer from "./AllTasksContainer/AllTasksContainer";
import CreateBtn from "../../shared/CreateBtn/CreateBtn";
import CreateTaskForm from "./CreateTaskForm/CreateTaskForm";

// hook
import useTasks from "../../../hooks/useTasks";
import useAuth from "../../../hooks/useAuth";
import ProfileBasicInfo from "./../../shared/ProfileBasicInfo/ProfileBasicInfo";

const TaskManagement = () => {
  const {
    separateTasksByStatus,
    createFormOpen,
    openCreateForm,
    closeCreateForm,
  } = useTasks();
  const { profileData } = useAuth();

  return (
    <div className="space-y-elementGapSm mb-sectionGapMd">
      {/* task count */}
      <section>
        <InnerContainer>
          <div className="flex flex-col-reverse gap-elementGapMd">
            <div>
              <TaskCount tasksData={separateTasksByStatus} />
              <div className="mt-elementGapSm">
                <CreateBtn
                  text="add new task"
                  onClickFunction={openCreateForm}
                />
              </div>
            </div>

            <div>
              <ProfileBasicInfo
                infoObject={profileData}
                modifyClasses="w-max"
              />
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
