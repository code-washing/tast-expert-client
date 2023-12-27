// react
import { useEffect } from "react";

// react query
import { useQuery } from "@tanstack/react-query";

// redux
import { useDispatch } from "react-redux";
import { setTasks } from "../features/task/taskSlice";

// custom hooks
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useTasksQuery = () => {
  const { profileData } = useAuth();
  const { axiosCustom } = useAxios();
  const dispatch = useDispatch();

  // tanstack fetch get request
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosCustom.get(`/tasks?email=${profileData.email}`);
      return res.data.data;
    },
  });

  useEffect(() => {
    if (!isLoading) {
      dispatch(setTasks(data));
    }
  }, [dispatch, isLoading, data]);

  return { isLoading };
};

export default useTasksQuery;
