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
    changeTaskStatus: (state, { payload }) => {
      const indexToChange = state.tasks.findIndex(
        (task) => task.id === payload
      );

      if (indexToChange !== -1) {
        state.tasks[indexToChange].status = payload.status;
      }
    },
  },
});

const { actions, reducer } = taskSlice;

export default reducer;

export const { setTasks, changeTaskStatus, setSeparateTasksByStatus } = actions;
