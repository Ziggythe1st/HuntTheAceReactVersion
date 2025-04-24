// src/features/gameSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  round: 0,
  statusMessage: "Click Play Game to start",
  gameInProgress: false,
  shufflingInProgress: false,
  cardsRevealed: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.round = 1;
      state.score = 0;
      state.gameInProgress = true;
      state.statusMessage = "Shuffling...";
    },
    endRound(state) {
      state.round++;
    },
    updateScore(state, action) {
      state.score += action.payload;
    },
    setStatusMessage(state, action) {
      state.statusMessage = action.payload;
    },
    resetGame(state) {
      return initialState;
    },
  },
});

export const { startGame, endRound, updateScore, setStatusMessage, resetGame } =
  gameSlice.actions;
export default gameSlice.reducer;
