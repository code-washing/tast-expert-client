// write imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  separateTasksByStatus: [],
  createFormOpen: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    setSeparateTasksByStatus: (state, { payload }) => {
      state.separateTasksByStatus = payload;
    },
    setCreateFormOpen: (state, { payload }) => {
      state.createFormOpen = payload;
    },
  },
});

const { actions, reducer } = taskSlice;

export default reducer;
export const { setTasks, setSeparateTasksByStatus, setCreateFormOpen } =
  actions;
