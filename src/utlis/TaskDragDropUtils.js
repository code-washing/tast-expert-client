import { createDragDropContext } from "../libs/ReusableDragDropProvider";

export const {
  Provider: TaskDragDropProvider,
  useProvider: useTaskDragDropProvider,
} = createDragDropContext();
