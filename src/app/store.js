import { configureStore } from "@reduxjs/toolkit";

// reducers
import authReducer from "./../features/auth/authSlice";
import mediaQueryReducer from "./../features/mediaQuery/mediaQuerySlice";
import mobileNavReducer from "./../features/mobileNav/mobileNavSlice";
import taskReducer from "./../features/task/taskSlice";
import backdropReducer from "./../features/backdrop/backdropSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mediaQuery: mediaQueryReducer,
    mobileNav: mobileNavReducer,
    task: taskReducer,
    backdrop: backdropReducer,
  },
});
