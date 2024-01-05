// react
import PropTypes from "prop-types";

import { forwardRef } from "react";

// component
import Task from "../Task/Task";

// hook
import useTasks from "../../../../hooks/useTasks";
import useDragDropProvider from "../../../../hooks/useDragDropProvider";

// redux
import { useSelector } from "react-redux";

/* eslint-disable react/display-name */
const TaskCollectionContainer = forwardRef(({ taskCollectionData }, ref) => {
  const { name, tasks: tasksByStatus } = taskCollectionData;
  const { updateTasks } = useTasks();
  const { draggedElementId } = useSelector((store) => store.dragDrop);
  const { tasks } = useSelector((store) => store.task);
  const { collectPositions } = useDragDropProvider();

  return (
    <div
      // collect the container ids and positions of the container on the screen
      ref={(el) => {
        collectPositions(ref, el);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        updateTasks(e, draggedElementId, tasks);
      }}
      id={name}
      className="bg-white rounded-2xl p-elementGapSm drop-target"
    >
      <h3 className="font-semibold text-2xl pb-elementGapSm">{name}</h3>
      <ul className="space-y-4">
        {tasksByStatus?.length > 0 &&
          tasksByStatus.map((task) => {
            return (
              <li key={task._id}>
                <Task taskData={task} />
              </li>
            );
          })}
        {tasksByStatus?.length < 1 && (
          <p className="text-primary font-semibold text-center py-elementGapSm">{`No ${name} Tasks`}</p>
        )}
      </ul>
    </div>
  );
});

TaskCollectionContainer.propTypes = {
  taskCollectionData: PropTypes.object,
};

export default TaskCollectionContainer;
