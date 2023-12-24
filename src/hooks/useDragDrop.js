// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setInitialCollection,
  setTargetCollection,
  setDraggedElementId,
} from "../features/dragDrop/dragDropSlice";

const useDragDrop = () => {
  const dispatch = useDispatch();
  const { draggedElementId, targetCollection, initialCollection } = useSelector(
    (store) => store.dragDrop
  );

  // console.log(draggedElementId, initialCollection);
  return {
    dispatch,
    draggedElementId,
    targetCollection,
    initialCollection,
    setInitialCollection,
    setTargetCollection,
    setDraggedElementId,
  };
};

export default useDragDrop;
