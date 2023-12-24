// write imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draggedElementId: null,
  targetCollection: null,
  initialCollection: null,
};

const dragDropSlice = createSlice({
  name: "dragDrop",
  initialState,
  reducers: {
    setInitialCollection: (state, { payload }) => {
      state.initialCollection = payload;
    },
    setTargetCollection: (state, { payload }) => {
      state.targetCollection = payload;
    },
    setDraggedElementId: (state, { payload }) => {
      state.draggedElementId = payload;
    },
  },
});

const { reducer, actions } = dragDropSlice;

export default reducer;
export const {
  setInitialCollection,
  setTargetCollection,
  setDraggedElementId,
} = actions;
