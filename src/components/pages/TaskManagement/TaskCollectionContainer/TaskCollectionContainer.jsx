// react
import PropTypes from "prop-types";
import { forwardRef } from "react";

// component
import Task from "../Task/Task";

/* eslint-disable react/display-name */
const TaskCollectionContainer = forwardRef(({ taskCollectionData }, ref) => {
  const { name, tasks: tasksByStatus } = taskCollectionData;

  return (
    <div
      // collect the container ids and positions of the container on the screen
      ref={(el) => {
        if (!ref.current.includes(el) && el !== null) {
          ref.current.push(el);
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      id={name}
      className="bg-white rounded-2xl p-elementGapSm drop-target"
    >
      <h3 className="font-semibold text-2xl pb-elementGapSm">{name}</h3>
      <ul
        onDragOver={(e) => {
          e.preventDefault();
        }}
        className="space-y-4"
      >
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
