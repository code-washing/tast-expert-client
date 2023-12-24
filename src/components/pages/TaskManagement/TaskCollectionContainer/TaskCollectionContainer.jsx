// react
import PropTypes from "prop-types";
import { useRef } from "react";

// component
import Task from "../Task/Task";

// hook
import useDragDrop from "../../../../hooks/useDragDrop";
import useTasks from "./../../../../hooks/useTasks";

const TaskCollectionContainer = ({ taskCollectionData }) => {
  const listRef = useRef(null);
  const { name, tasks: tasksByStatus } = taskCollectionData;
  const { draggedElementId } = useDragDrop();
  const { dispatch, updateTaskStatus, updateTask } = useTasks();

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        // find the container status we are dropping the element in
        const newCollection = e.target.closest(".drop-target").id.toLowerCase();

        // get the current time and set as last updated
        const lastUpdated = new Date().toISOString();

        const updatedTaskInfo = {
          _id: draggedElementId,
          status: newCollection,
          lastUpdated,
        };

        dispatch(updateTaskStatus(updatedTaskInfo));
        updateTask(updatedTaskInfo);
      }}
      id={name}
      className="bg-white rounded-2xl p-elementGapSm drop-target"
    >
      <h3 className="font-semibold text-2xl pb-elementGapSm">{name}</h3>
      <ul ref={listRef} className="space-y-4">
        {tasksByStatus.length > 0 &&
          tasksByStatus.map((task) => {
            return (
              <li key={task._id}>
                <Task taskData={task} />
              </li>
            );
          })}
        {tasksByStatus.length < 1 && <p>{`No ${name} Tasks`}</p>}
      </ul>
    </div>
  );
};

TaskCollectionContainer.propTypes = {
  taskCollectionData: PropTypes.object,
};

export default TaskCollectionContainer;
