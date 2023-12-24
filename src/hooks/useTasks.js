// react
import { useEffect } from "react";

// hook
import useAxios from "./useAxios";
import useTaskSeparator from "./useTaskSeparator";

// tanstack query
import { useQuery } from "@tanstack/react-query";

// redux
import { useSelector, useDispatch } from "react-redux";

import {
  setTasks,
  updateTaskStatus,
  setSeparateTasksByStatus,
} from "../features/task/taskSlice";

const useTasks = () => {
  const dispatch = useDispatch();
  const { tasks, separateTasksByStatus } = useSelector((store) => store.task);
  const { axiosCustom } = useAxios();
  const { getSeparateTasksObject } = useTaskSeparator();

  // tanstack fetch get request
  const { data: allTasksData, isLoading } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await axiosCustom.get("/tasks");
      return res.data.data;
    },
  });

  const updateTask = async (updateInfo) => {
    const res = await axiosCustom.patch(
      `/tasks/update/${updateInfo._id}`,
      updateInfo
    );

    if (res.data.success) {
      dispatch(setTasks(res.data.updatedTasks));
    }
    return;
  };

  const deleteTask = async (_id) => {
    const res = await axiosCustom.delete(`/tasks/delete/${_id}`);

    if (res.data.success) {
      dispatch(setTasks(res.data.updatedTasks));
    }
    return;
  };

  // move remote data to ui state
  useEffect(() => {
    if (!isLoading) {
      dispatch(setTasks(allTasksData));
    }
  }, [dispatch, allTasksData, isLoading]);

  // get separateTasksByStatus state from tasks state
  useEffect(() => {
    dispatch(setSeparateTasksByStatus(getSeparateTasksObject(tasks)));
  }, [dispatch, tasks, getSeparateTasksObject]);

  return {
    tasks,
    separateTasksByStatus,
    dispatch,
    updateTaskStatus,
    setTasks,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
