import { configureStore } from "@reduxjs/toolkit";

// reducers
import mediaQueryReducer from "./../features/mediaQuery/mediaQuerySlice";
import authReducer from "./../features/auth/authSlice";
import mobileNavReducer from "./../features/mobileNav/mobileNavSlice";

export const store = configureStore({
  reducer: {
    mediaQuery: mediaQueryReducer,
    auth: authReducer,
    mobileNav: mobileNavReducer,
  },
});
