// react
import PropTypes from "prop-types";

// react icons
import { AiOutlineClose } from "react-icons/ai";

// shared components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";

// custom hooks
import useAuth from "./../../../../hooks/useAuth";
import useTasks from "../../../../hooks/useTasks";
import useEscapeClose from "../../../../hooks/useEscapeClose";

const CreateTaskForm = ({ openState = false, closeFunction = null }) => {
  // add support for escape button close
  useEscapeClose(closeFunction);
  // form element css classes
  const labelClasses = "block mb-2 text-sm lg:text-lg";
  const inputClasses =
    "block rounded-default !w-full text-sm lg:text-base p-1 md:p-2 font-inherit bg-lightGray";

  // take the user's email from auth
  const { profileData } = useAuth();
  const { createTask } = useTasks();

  // all form values come from their inputs but date comes from the state
  const handleCreateTask = (e) => {
    e.preventDefault();

    // take all the necessary values
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;
    const date = new Date().toISOString();

    // Task data summarized
    const taskData = {
      title,
      description,
      status: "todo",
      deadline,
      priority,
      lastUpdated: date,
      email: profileData.email,
    };

    createTask(taskData);
    form.reset();
  };

  return (
    <div>
      {/* THE FORM */}
      <div
        className={`${
          openState ? "opacity-100 visible" : "opacity-0 collapse"
        } shadow-large origin-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-white z-40 lg:rounded-default w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] duration-default`}
      >
        {/* close button */}
        <button className="block w-max ml-auto" onClick={closeFunction}>
          <AiOutlineClose className="text-2xl mb-4" />
        </button>

        {/*  heading */}
        <SectionHeading
          text={"Add new task"}
          modifyClasses="mb-4 text-center"
        />

        {/* form starts here */}
        <form onSubmit={handleCreateTask} className="block space-y-4">
          {/* title */}
          <div>
            <label className={labelClasses}>Title</label>
            <input name="title" className={inputClasses} type="text" required />
          </div>

          {/* description */}
          <div>
            <label className={labelClasses}>Description</label>
            <textarea
              name="description"
              className={`${inputClasses} h-6 md:h-20`}
              required
            ></textarea>
          </div>

          {/* deadline and priority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* deadline */}
            <div>
              <label className={labelClasses}>Deadline</label>
              <input
                name="deadline"
                className={inputClasses}
                type="text"
                placeholder="dd-mm-yyyy"
                required
              />
            </div>

            {/* priority */}
            <div>
              <label className={labelClasses}>Priority</label>
              <select
                className={`block w-full text-sm lg:text-base rounded-default p-[5px] md:p-[8.5px] lg:p-[9px] bg-lightGray`}
                name="priority"
              >
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          {/* submit button */}
          <ButtonBtn text="Create" modifyClasses="mx-auto !mt-10" />
        </form>
      </div>
    </div>
  );
};

CreateTaskForm.propTypes = {
  openState: PropTypes.bool,
  closeFunction: PropTypes.func,
};

export default CreateTaskForm;
