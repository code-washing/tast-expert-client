import { configureStore } from "@reduxjs/toolkit";

// reducers
import mediaQueryReducer from "./../features/mediaQuery/mediaQuerySlice";

export const store = configureStore({
  reducer: {
    mediaQuery: mediaQueryReducer,
  },
});
