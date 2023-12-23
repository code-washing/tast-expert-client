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
  changeTaskStatus,
  setSeparateTasksByStatus,
} from "../features/task/taskSlice";

const useTasks = () => {
  const dispatch = useDispatch();
  const { tasks, separateTasksByStatus } = useSelector((store) => store.task);
  const { axiosCustom } = useAxios();
  const { getSeparateTasksObject } = useTaskSeparator();

  // tanstack
  const { data: allTasksData = [], isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosCustom.get("/tasks");
      return res.data.data;
    },
  });

  // move remote data to ui state
  useEffect(() => {
    if (!isLoading) {
      dispatch(setTasks(allTasksData));
      dispatch(setSeparateTasksByStatus(getSeparateTasksObject(allTasksData)));
    }

    console.log(isLoading);
  }, [allTasksData, dispatch, isLoading, getSeparateTasksObject]);

  // get separateTasksByStatus state from tasks state
  useEffect(() => {}, [dispatch]);

  return {
    tasks,
    separateTasksByStatus,
    dispatch,
    changeTaskStatus,
  };
};

export default useTasks;
