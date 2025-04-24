import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/cardSlice";
import gameReducer from "../features/gameSlice";

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    game: gameReducer,
  },
});
