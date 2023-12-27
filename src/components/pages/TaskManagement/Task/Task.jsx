// react
import PropTypes from "prop-types";
import { useState } from "react";

// react icons
import { IoTrashSharp, IoChevronDownOutline } from "react-icons/io5";

// component
import Accordion from "../../../shared/Accordion/Accordion";

// hook
import useDragDrop from "../../../../hooks/useDragDrop";
import useTasks from "../../../../hooks/useTasks";

// redux
import { useDispatch } from "react-redux";

const Task = ({ taskData }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { _id, title, description, deadline, priority } = taskData;
  const { setDraggedElementId, setInitialCollection } = useDragDrop();
  const dispatch = useDispatch();
  const { deleteTask } = useTasks();

  const priorityColor =
    priority === "high"
      ? "bg-red-500"
      : priority === "moderate"
      ? "bg-orange-500"
      : "bg-green-500";

  return (
    <div
      draggable={true}
      onDragStart={(e) => {
        setIsDragging(true);
        dispatch(
          setInitialCollection(
            e.target.closest(".drop-target").id.toLowerCase()
          )
        );
        dispatch(setDraggedElementId(_id));
      }}
      onDragEnd={(e) => {
        e.preventDefault();
        setIsDragging(false);
        dispatch(setDraggedElementId(null));
      }}
      className={`border border-lightBorder rounded-xl shadow-small px-4 text-[0.8rem] flex flex-col cursor-grab ${
        isDragging ? "opacity-30 !cursor-grabbing" : "opacity-100"
      }`}
    >
      {/* title and delete button */}
      <div className="flex items-center justify-between mb-1 mt-4">
        <p className="font-semibold text-sm">{title}</p>

        {/* delete button */}
        <button
          title="Delete Task"
          onClick={() => {
            deleteTask(_id);
          }}
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
