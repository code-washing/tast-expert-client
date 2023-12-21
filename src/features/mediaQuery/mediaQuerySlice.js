//redux
import { createSlice } from '@reduxjs/toolkit';

//media queries
const mobile = '(max-width: 480px)';
export const mobileQuery = window.matchMedia(mobile);

const smallTablet = '(min-width: 481px) and (max-width: 767px)';
export const smallTabletQuery = window.matchMedia(smallTablet);

const largeTablet = '(min-width: 768px) and (max-width: 1024px)';
export const largeTabletQuery = window.matchMedia(largeTablet);

const computer = '(min-width: 1025px)';
export const computerQuery = window.matchMedia(computer);

const initialState = {
  isMobile: mobileQuery.matches,
  isSmallTablet: smallTabletQuery.matches,
  isLargeTablet: largeTabletQuery.matches,
  isComputer: computerQuery.matches,
  isLargeScreen: computerQuery.matches || largeTabletQuery.matches,
  isSmallScreen: mobileQuery.matches || smallTabletQuery.matches,
};

const mediaQuerySlice = createSlice({
  name: 'mediaQuery',
  initialState,
  reducers: {
    mobileMatched: (state) => {
      state.isMobile = true;
      state.isSmallTablet = false;
      state.isLargeTablet = false;
      state.isComputer = false;
      state.isLargeScreen = false;
      state.isSmallScreen = true;
    },
    smallTabletMatched: (state) => {
      state.isMobile = false;
      state.isSmallTablet = true;
      state.isLargeTablet = false;
      state.isComputer = false;
      state.isLargeScreen = false;
      state.isSmallScreen = true;
    },
    largeTabletMatched: (state) => {
      state.isMobile = false;
      state.isSmallTablet = false;
      state.isLargeTablet = true;
      state.isComputer = false;
      state.isLargeScreen = true;
      state.isSmallScreen = false;
    },
    computerMatched: (state) => {
      state.isMobile = false;
      state.isSmallTablet = false;
      state.isLargeTablet = false;
      state.isComputer = true;
      state.isLargeScreen = true;
      state.isSmallScreen = false;
    },
  },
});

export default mediaQuerySlice.reducer;
export const {
  mobileMatched,
  smallTabletMatched,
  largeTabletMatched,
  computerMatched,
} = mediaQuerySlice.actions;
