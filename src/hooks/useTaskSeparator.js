// react
import { useCallback } from "react";

const useTaskSeparator = () => {
  const findTasksByStatus = (allTasks, status) => {
    return allTasks?.filter((task) => task.status === status);
  };

  const getSeparateTasksObject = useCallback((allTasks) => {
    const todoTasks = findTasksByStatus(allTasks, "todo");
    const ongoingTasks = findTasksByStatus(allTasks, "ongoing");
    const completedTasks = findTasksByStatus(allTasks, "completed");

    return [
      { id: 0, name: "Todo", tasks: todoTasks },
      { id: 1, name: "Ongoing", tasks: ongoingTasks },
      { id: 2, name: "Completed", tasks: completedTasks },
    ];
  }, []);

  return { getSeparateTasksObject };
};

export default useTaskSeparator;
