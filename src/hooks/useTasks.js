// hook
import useAxios from "./useAxios";
import useToast from "./useToast";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setTasks, setCreateFormOpen } from "../features/task/taskSlice";
import { setOpen } from "./../features/backdrop/backdropSlice";

const useTasks = () => {
  const dispatch = useDispatch();
  const { profileData } = useSelector(store => store.auth);

  const { axiosCustom } = useAxios();
  const { showToast } = useToast();

  const openCreateForm = () => {
    dispatch(setCreateFormOpen(true));
    dispatch(setOpen(true));
  };

  const closeCreateForm = () => {
    dispatch(setCreateFormOpen(false));
    dispatch(setOpen(false));
  };

  const createTask = async newTaskInfo => {
    const res = await axiosCustom.post(`/tasks`, newTaskInfo);
    if (res.data.success) {
      showToast("Todo Added Successfully", "success");
      closeCreateForm();
      dispatch(setTasks(res.data.updatedTasks));
    }
    return;
  };

  const sortToLatest = arr => {
    const sortedArr = [...arr].sort(
      (a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated)
    );

    return sortedArr;
  };

  const updateTasks = async (draggedTaskId, updatedStatus, tasks) => {
    // find latest time
    const lastUpdated = new Date().toISOString();

    // create a new array
    const updatedTasks = tasks.map(task => {
      return task._id === draggedTaskId
        ? { ...task, status: updatedStatus, lastUpdated }
        : task;
    });

    // update redux task state with new array
    dispatch(setTasks(updatedTasks));

    // send the update information to the database
    const updatedTask = {
      _id: draggedTaskId,
      status: updatedStatus,
      lastUpdated,
    };

    const res = await axiosCustom.patch(
      `/tasks/update/${draggedTaskId}`,
      updatedTask
    );

    // show success toast on success
    if (res.data.success) {
      showToast("Tasks Updated Successfully", "success");
      dispatch(setTasks(res.data.updatedTasks));
      return true;
    }

    return false;
  };

  const deleteTask = async (_id, tasks) => {
    const remainingTasks = tasks.filter(task => task._id !== _id);
    dispatch(setTasks(remainingTasks));

    const res = await axiosCustom.delete(
      `/tasks/delete/${_id}?email=${profileData.email}`
    );
    if (res.data.success) {
      showToast("Task Deleted Successfully", "success");
      dispatch(setTasks(res.data.updatedTasks));
    }
    return;
  };

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
