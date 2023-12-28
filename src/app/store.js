import { configureStore } from "@reduxjs/toolkit";

// reducers
import mediaQueryReducer from "./../features/mediaQuery/mediaQuerySlice";
import authReducer from "./../features/auth/authSlice";
import mobileNavReducer from "./../features/mobileNav/mobileNavSlice";
import taskReducer from "./../features/task/taskSlice";
import dragDropReducer from "./../features/dragDrop/dragDropSlice";
import backdropReducer from "./../features/backdrop/backdropSlice";

export const store = configureStore({
  reducer: {
    mediaQuery: mediaQueryReducer,
    auth: authReducer,
    mobileNav: mobileNavReducer,
    task: taskReducer,
    dragDrop: dragDropReducer,
    backdrop: backdropReducer,
  },
});
