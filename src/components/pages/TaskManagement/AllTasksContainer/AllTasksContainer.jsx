// react
import PropTypes from "prop-types";

// component
import TaskCollectionContainer from "../TaskCollectionContainer/TaskCollectionContainer";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

// utils
import { useTaskDragDropProvider } from "../../../../utlis/TaskDragDropUtils";

const AllTasksContainer = ({ tasksData, modifyClasses = "" }) => {
  const { dropContainersRef } = useTaskDragDropProvider();

  return (
    <div className={`${modifyClasses}`}>
      <SectionHeading text="Tasks" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-elementGapSm bg-lightBorder p-4 sm:p-elementGapSm rounded-2xl">
        {tasksData &&
          tasksData.map((singleCollection) => {
            return (
              <TaskCollectionContainer
                ref={dropContainersRef}
                key={singleCollection.id}
                taskCollectionData={singleCollection}
              />
            );
          })}
      </div>
    </div>
  );
};

AllTasksContainer.propTypes = {
  modifyClasses: PropTypes.string,
  tasksData: PropTypes.array,
};

export default AllTasksContainer;
