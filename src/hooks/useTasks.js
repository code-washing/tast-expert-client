// hook
import useAxios from "./useAxios";
import useToast from "./useToast";

// redux
import { useDispatch } from "react-redux";

import { setTasks, setCreateFormOpen } from "../features/task/taskSlice";

const useTasks = () => {
  const dispatch = useDispatch();
  const { axiosCustom } = useAxios();
  const { showToast } = useToast();

  const openCreateForm = () => {
    dispatch(setCreateFormOpen(true));
  };

  const closeCreateForm = () => {
    dispatch(setCreateFormOpen(false));
  };

  const createTask = async (newTaskInfo) => {
    const res = await axiosCustom.post(`/tasks`, newTaskInfo);
    if (res.data.success) {
      showToast("Todo Added Successfully", "success");
      dispatch(setCreateFormOpen(false));
    }
    return;
  };

  const sortToLatest = (arr) => {
    const sortedArr = [...arr].sort(
      (a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated)
    );

    return sortedArr;
  };

  const updateTasks = async (e, draggedTaskId, tasks) => {
    //  find the container id to move to (todo/ongoing/completed)
    const status = e.target.closest(".drop-target").id.toLowerCase();
    const lastUpdated = new Date().toISOString();

    // create a new array
    const updatedTasks = tasks.map((task) => {
      return task._id === draggedTaskId
        ? { ...task, status, lastUpdated }
        : task;
    });

    // update redux task state with new array
    dispatch(setTasks(updatedTasks));

    // send the update information to the database
    const updatedTask = {
      _id: draggedTaskId,
      status,
      lastUpdated,
    };

    const res = await axiosCustom.patch(
      `/tasks/update/${draggedTaskId}`,
      updatedTask
    );

    // show success toast on success
    if (res.data.success) {
      showToast("Tasks Updated Successfully", "success");
      // dispatch(setTasks(res.data.updatedTasks));
      return;
    }
  };

  const deleteTask = async (_id) => {
    const res = await axiosCustom.delete(`/tasks/delete/${_id}`);
    if (res.data.success) {
      showToast("Task Deleted Successfully", "success");
      dispatch(setTasks(res.data.updatedTasks));
    }
    return;
  };

  // move remote data to ui state

  return {
    sortToLatest,
    updateTasks,
    deleteTask,
    createTask,
    openCreateForm,
    closeCreateForm,
  };
};

export default useTasks;
