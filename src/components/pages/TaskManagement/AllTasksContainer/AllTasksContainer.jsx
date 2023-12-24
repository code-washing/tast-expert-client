import PropTypes from "prop-types";

// component
import TaskCollectionContainer from "../TaskCollectionContainer/TaskCollectionContainer";

const AllTasksContainer = ({ tasksData, modifyClasses = "" }) => {
  return (
    <div className={`${modifyClasses}`}>
      <h2 className="font-semibold text-2xl mb-elementGapSm">Tasks</h2>

      <div className="grid grid-cols-3 gap-elementGapSm bg-lightGray p-elementGapSm  rounded-2xl">
        {tasksData &&
          tasksData.map((singleCollection) => {
            return (
              <TaskCollectionContainer
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
