import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    value: 0,
  },
  reducers: {
    resetScore: (state) => {
      state.value = 0;
    },
    increaseByTwentyFive: (state) => {
      state.value += 25;
    },
    increaseByFifty: (state) => {
      state.value += 50;
    },
    increaseByHundred: (state) => {
      state.value += 100;
    },
  },
});

export const {
  resetScore,
  increaseByTwentyFive,
  increaseByFifty,
  increaseByHundred,
} = scoreSlice.actions;

export default scoreSlice.reducer;
