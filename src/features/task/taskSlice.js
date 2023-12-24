// write imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  separateTasksByStatus: [],
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
    updateTaskStatus: (state, { payload }) => {
      const indexToChange = state.tasks.findIndex(
        (task) => task._id === payload._id
      );

      if (indexToChange !== -1) {
        state.tasks[indexToChange].status = payload.status;
        state.tasks[indexToChange].lastUpdated = payload.lastUpdated;
      }

      state.tasks.sort(
        (a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated)
      );
    },
  },
});

const { actions, reducer } = taskSlice;

export default reducer;
export const { setTasks, updateTaskStatus, setSeparateTasksByStatus } = actions;
