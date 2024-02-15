// react
import { useEffect } from "react";

// hooks
import useAxios from "./useAxios";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setTasks, setLoading } from "../features/task/taskSlice";

// react query
import { useQuery } from "@tanstack/react-query";

const useTasksQuery = () => {
  const dispatch = useDispatch();
  const { profileData } = useSelector(store => store.auth);
  const { axiosCustom } = useAxios();

  // tanstack fetch get request
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosCustom.get(`/tasks?email=${profileData.email}`);
      return res.data.data;
    },
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    }

    if (!isLoading) {
      dispatch(setTasks(data));
      dispatch(setLoading(false));
    }
  }, [dispatch, isLoading, data]);

  return { isLoading };
};

export default useTasksQuery;
