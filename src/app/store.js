import { configureStore } from "@reduxjs/toolkit";

// reducers
import mediaQueryReducer from "./../features/mediaQuery/mediaQuerySlice";
import authReducer from "./../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    mediaQuery: mediaQueryReducer,
    auth: authReducer,
  },
});
