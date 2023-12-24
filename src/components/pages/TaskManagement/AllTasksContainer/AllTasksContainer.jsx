import PropTypes from "prop-types";

// component
import TaskCollectionContainer from "../TaskCollectionContainer/TaskCollectionContainer";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

const AllTasksContainer = ({ tasksData, modifyClasses = "" }) => {
  return (
    <div className={`${modifyClasses}`}>
      <SectionHeading text="Tasks" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-elementGapSm bg-lightGray p-elementGapSm  rounded-2xl">
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
