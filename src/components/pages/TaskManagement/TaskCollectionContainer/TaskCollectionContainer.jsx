// react
import PropTypes from "prop-types";
import { forwardRef } from "react";

// component
import Task from "../Task/Task";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";

// hook
import { useSelector } from "react-redux";

/* eslint-disable react/display-name */
const TaskCollectionContainer = forwardRef(({ taskCollectionData }, ref) => {
  const { name, tasks: tasksByStatus } = taskCollectionData;
  const { loading } = useSelector((store) => store.task);

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
      className="bg-white rounded-2xl p-4 sm:px-elementGapSm drop-target"
    >
      <h3 className="font-semibold text-2xl pb-elementGapSm border-b border-lightBorder mb-elementGapSm">
        {name}
      </h3>

      {loading && (
        <LoadingSpinner
          onlyLoader={true}
          modifyClasses="text-3xl py-elementGapSm"
        />
      )}

      {!loading && tasksByStatus?.length > 0 && (
        <div className="bg-lightBorder rounded-2xl p-4 ">
          <div className="max-h-[12rem] overflow-y-auto scrollbar-thin scrollbar-thumb-primaryLight scrollbar-track-white">
            <ul
              onDragOver={(e) => {
                e.preventDefault();
              }}
              className={`space-y-4 ${
                tasksByStatus.length > 1 ? "mr-2" : "mr-0"
              }`}
            >
              {tasksByStatus.map((task) => {
                return (
                  <li key={task._id}>
                    <Task taskData={task} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {!loading && tasksByStatus?.length < 1 && (
        <p className="text-primary font-semibold text-center py-elementGapSm">{`No ${name} Tasks`}</p>
      )}
    </div>
  );
});

TaskCollectionContainer.propTypes = {
  taskCollectionData: PropTypes.object,
};

export default TaskCollectionContainer;
