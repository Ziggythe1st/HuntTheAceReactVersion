import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGame, resetGame } from "../features/gameSlice";
import {
  revealAllCards,
  hideAllCards,
  setShuffleCards,
} from "../features/cardSlice";
import { shuffleCards } from "../helpers/shuffleCards";

const Header = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const gameInProgress = useSelector((state) => state.game.gameInProgress);
  const gameOver = useSelector((state) => state.game.gameOver);

  const handleStartGame = () => {
    dispatch(resetGame());
    dispatch(startGame());

    // 👁️ Step 1: show all cards face-up
    dispatch(revealAllCards());

    // ⏳ Step 2: after a short delay, hide and shuffle
    setTimeout(() => {
      dispatch(hideAllCards());

      setTimeout(() => {
        const shuffled = shuffleCards(cards);
        dispatch(setShuffleCards(shuffled));
      }, 300); // allow DOM to reflect hide before shuffle
    }, 1000); // 1s delay before hiding after reveal
  };

  return (
    <header className="flex flex-col items-center mb-6 w-full max-w-sm px-4">
      <h1 className="text-4xl font-bold mb-4">Hunt the Ace</h1>
      <button
        onClick={handleStartGame}
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white font-bold py-2 px-6 rounded transition disabled:opacity-50"
        aria-label={
          gameOver
            ? "Play again"
            : gameInProgress
            ? "Restart game"
            : "Start game"
        }
      >
        {gameOver
          ? "Play Again"
          : gameInProgress
          ? "Restart Game"
          : "Play Game"}
      </button>
    </header>
  );
};

export default Header;
