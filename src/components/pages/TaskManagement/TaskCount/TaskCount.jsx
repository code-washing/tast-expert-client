// react
import PropTypes from "prop-types";

// react icons
import {
  FaClockRotateLeft,
  FaClipboardList,
  FaClipboardCheck,
} from "react-icons/fa6";

const mainBoxStyles = "w-[10rem] aspect-square p-4 rounded-2xl bg-white";
const iconBoxStyles = "p-2 w-max rounded-lg mb-elementGapSm";
const iconStyles = "text-xl";
const textBoxStyles = "font-semibold";
const statusTextStyles = "font-medium text-gray-400";
const numberTextStyles = "text-3xl font-extrabold inline-block mr-1";
const afterNumberTextStyles = "inline-block";

const TaskCount = ({ tasksData = null, modifyClasses = "" }) => {
  const todoTasksCount = tasksData[0]?.tasks.length;
  const ongoingTasksCount = tasksData[1]?.tasks.length;
  const completedTaksCount = tasksData[2]?.tasks.length;

  if (tasksData) {
    return (
      <div
        className={`w-max overflow-x-auto rounded-2xl bg-lightGray ${modifyClasses}`}
      >
        {/* inner container */}
        <div className="p-elementGapSm rounded-2xl flex gap-elementGapSm w-max">
          {/* to-do */}
          <div className={mainBoxStyles}>
            {/* icon */}
            <div className={`bg-red-100 ${iconBoxStyles}`}>
              <FaClipboardList className={`text-red-400 ${iconStyles}`} />
            </div>

            <div className={textBoxStyles}>
              <p className={statusTextStyles}>Remaining</p>
              <p className={numberTextStyles}>{todoTasksCount}</p>
              <p className={afterNumberTextStyles}>Task</p>
            </div>
          </div>

          {/* on going */}
          <div className={mainBoxStyles}>
            {/* icon */}
            <div className={`bg-yellow-100 ${iconBoxStyles}`}>
              <FaClockRotateLeft className={`text-yellow-400 ${iconStyles}`} />
            </div>

            <div className={textBoxStyles}>
              <p className={statusTextStyles}>Ongoing</p>
              <p className={numberTextStyles}>{ongoingTasksCount}</p>
              <p className={afterNumberTextStyles}>Task</p>
            </div>
          </div>

          {/* done */}
          <div className={mainBoxStyles}>
            {/* icon */}
            <div className={`bg-green-100 ${iconBoxStyles}`}>
              <FaClipboardCheck className={`text-green-400 ${iconStyles}`} />
            </div>

            <div className={textBoxStyles}>
              <p className={statusTextStyles}>Completed</p>
              <p className={numberTextStyles}>{completedTaksCount}</p>
              <p className={afterNumberTextStyles}>Task</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

TaskCount.propTypes = {
  tasksData: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default TaskCount;
