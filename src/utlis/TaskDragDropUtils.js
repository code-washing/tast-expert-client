import { createDragDropContext } from "../providers/ReusableDragDropProvider";

export const {
  Provider: TaskDragDropProvider,
  useProvider: useTaskDragDropProvider,
} = createDragDropContext();
