// src/features/gameSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { calculateScore } from "../helpers/calculateScore";
import { ACE_ID } from "../helpers/gameConfig";

const initialState = {
  score: 0,
  round: 0,
  statusMessage: "Click Play Game to start",
  gameInProgress: false,
  shufflingInProgress: false,
  cardsRevealed: true,
  gameOver: false,
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
      state.cardsRevealed = false;
    },
    startNewRound(state) {
      state.round += 1;
      state.cardsRevealed = false;
      state.statusMessage = "Shuffling for new round...";
    },
    updateScore(state, action) {
      state.score += action.payload;
    },
    setStatusMessage(state, action) {
      state.statusMessage = action.payload;
    },
    setGameOver(state) {
      state.gameInProgress = false;
      state.gameOver = true;
      state.statusMessage = `🏁 Game Over! Final Score: ${state.score}`;
    },
    resetGame(state) {
      return initialState;
    },
    checkCardChoice(state, action) {
      const clickedId = action.payload;
      const aceId = ACE_ID; // You can make this dynamic later if needed

      if (clickedId === aceId) {
        const scoreToAdd = calculateScore(state.round);
        state.statusMessage = "🎯 Hit!! - Well Done!";
        state.score += scoreToAdd;
      } else {
        state.statusMessage = "💔 Missed! Try again next round.";
      }

      state.cardsRevealed = true; // Mark that player has clicked
    },
  },
});

export const {
  startGame,
  startNewRound,
  updateScore,
  setStatusMessage,
  resetGame,
  checkCardChoice,
  setGameOver,
} = gameSlice.actions;
export default gameSlice.reducer;
