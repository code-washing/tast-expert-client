// redux
import { useSelector } from "react-redux";
import {
  setInitialCollection,
  setTargetCollection,
  setDraggedElementId,
} from "../features/dragDrop/dragDropSlice";

const useDragDrop = () => {
  const { draggedElementId, targetCollection, initialCollection } = useSelector(
    (store) => store.dragDrop
  );

  // console.log(draggedElementId, initialCollection);
  return {
    draggedElementId,
    targetCollection,
    initialCollection,
    setInitialCollection,
    setTargetCollection,
    setDraggedElementId,
  };
};

export default useDragDrop;
