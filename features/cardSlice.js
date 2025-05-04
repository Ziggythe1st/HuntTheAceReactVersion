import { createSlice } from "@reduxjs/toolkit";
import { ACE_ID } from "../helpers/gameConfig";

const initialState = {
  cards: [],
  aceId: ACE_ID,
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
      state.cards.forEach((c) => (c.isFlipped = false));
    },
    setShuffleCards(state, action) {
      state.cards = action.payload.map((card) => ({
        ...card,
        isFlipped: true, // force face-down after shuffle
      }));
    },
  },
});

export const {
  setCards,
  flipCard,
  hideAllCards,
  revealAllCards,
  setShuffleCards, // renamed
} = cardSlice.actions;

export default cardSlice.reducer;
