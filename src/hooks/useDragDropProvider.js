// react
import { useContext } from "react";

// context
import { DragDropContext } from "../providers/DragDropProvider";

const useDragDropProvider = () => {
  const value = useContext(DragDropContext);

  if (!value) {
    throw new Error("Provider hasn't wrapped the component");
  }
  return value;
};

export default useDragDropProvider;
