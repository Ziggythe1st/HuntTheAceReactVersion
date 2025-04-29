// src/features/cardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [], // [{id, imagePath, isFlipped}]
  aceId: 4,
  cardPositions: [], // optional: shuffle logic
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    },
    flipCard(state, action) {
      const id = action.payload;
      const card = state.cards.find((c) => c.id === id);
      if (card) card.isFlipped = false;
    },
    hideAllCards(state) {
      state.cards.forEach((c) => (c.isFlipped = true));
    },
    revealAllCards(state) {
      state.cards.forEach((c) => {
        c.isFlipped = false;
      });
    },
  },
});

export const { setCards, flipCard, resetCards, hideAllCards, revealAllCards } =
  cardSlice.actions;
export default cardSlice.reducer;
