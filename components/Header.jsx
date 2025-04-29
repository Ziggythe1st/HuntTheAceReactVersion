import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGame, resetGame } from "../features/gameSlice";
import { hideAllCards } from "../features/cardSlice";

const Header = () => {
  const dispatch = useDispatch();
  const gameInProgress = useSelector((state) => state.game.gameInProgress);
  const gameOver = useSelector((state) => state.game.gameOver);

  const handleStartGame = () => {
    dispatch(resetGame());
    dispatch(startGame());
    dispatch(hideAllCards());
  };

  return (
    <header className="flex flex-col items-center mb-6">
      <h1 className="text-4xl font-bold mb-4">Hunt the Ace</h1>
      <button
        onClick={handleStartGame}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
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
