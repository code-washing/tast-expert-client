// react
import PropTypes from "prop-types";
import { useState } from "react";

// react icons
import { IoTrashSharp, IoChevronDownOutline } from "react-icons/io5";

// component
import Accordion from "../../../shared/Accordion/Accordion";

// hook
import useTasks from "../../../../hooks/useTasks";

// redux
import { useSelector } from "react-redux";

// utils
import { useTaskDragDropProvider } from "../../../../utlis/TaskDragDropUtils";

const Task = ({ taskData }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { _id, title, description, deadline, priority } = taskData;

  const { deleteTask, updateTasks } = useTasks();

  const { tasks } = useSelector((store) => store.task);

  const { findDropContainerId, dropContainersRef } = useTaskDragDropProvider();

  const priorityColor =
    priority === "high"
      ? "bg-red-500"
      : priority === "moderate"
      ? "bg-orange-500"
      : "bg-green-500";

  return (
    <div
      draggable={true}
      onTouchStart={() => {
        setIsDragging(true);
        // make the website body temporarily unscrollable
        document.body.style.overflowY = "hidden";
      }}
      onTouchEnd={(e) => {
        const status = findDropContainerId(e, dropContainersRef, "touch");
        // make the website body scrollable again
        document.body.style.overflowY = "auto";
        if (status) {
          updateTasks(_id, status, tasks);
        }
        setIsDragging(false);
      }}
      onDragStart={() => {
        setIsDragging(true);
      }}
      onDragEnd={(e) => {
        const status = findDropContainerId(e, dropContainersRef, "mouse");
        if (status) {
          updateTasks(_id, status, tasks);
        }
        setIsDragging(false);
      }}
      className={`border border-lightBorder rounded-xl shadow-small px-4 text-[0.8rem] flex flex-col cursor-grab ${
        isDragging
          ? "opacity-30 !cursor-grabbing"
          : "opacity-100 !cursor-pointer"
      }`}
    >
      {/* title and delete button */}
      <div className="flex items-center justify-between mb-1 mt-4">
        <p className="font-semibold text-sm">{title}</p>

        {/* delete button */}
        <button
          title="Delete Task"
          onClick={() => deleteTask(_id, tasks)}
          onTouchStart={() => deleteTask(_id, tasks)}
          aria-label="Delete task"
          className="flex justify-center items-center px-[5px] py-[4px] group hover:bg-lightGray transition-all duration-default rounded-md"
        >
          <IoTrashSharp className="text-red-600 text-base" />
        </button>
      </div>
      {/* priority high/moderate/low */}
      <div
        className={`capitalize w-max py-[1px] px-3 text-white rounded-full text-[0.7rem] ${priorityColor}`}
        title={`${priority} priority task`}
      >
        {priority}
      </div>

      {/* expand Button */}
      <button
        onClick={() => {
          setExpanded((prev) => !prev);
        }}
        className="block w-full cursor-pointer pt-1 pb-2"
      >
        <IoChevronDownOutline
          className={`text-lg w-max mx-auto transition-all duration-default ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <Accordion expanded={expanded}>
        {/* description */}
        <div className="mb-2" title={description}>
          <span className="block font-semibold ">Description:</span>
          <p className="font-medium">{description.substring(0, 55)}...</p>
        </div>

        {/* deadline */}
        <div className="flex items-center justify-between mt-auto mb-4">
          <p>
            <span className="font-semibold">Deadline:</span> {deadline}
          </p>
        </div>
      </Accordion>
    </div>
  );
};

Task.propTypes = {
  taskData: PropTypes.object,
};

export default Task;
