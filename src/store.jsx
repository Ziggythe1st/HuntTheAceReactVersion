import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/scoreSlice";
import roundsReducer from "../features/roundSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    rounds: roundsReducer,
  },
});
