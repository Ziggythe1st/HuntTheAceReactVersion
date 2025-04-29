import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { flipCard } from "../features/cardSlice";
import { checkCardChoice } from "../features/gameSlice";

function Card({ id, frontImage, backImage, isFlipped }) {
  const dispatch = useDispatch();
  const gameInProgress = useSelector((state) => state.game.gameInProgress);
  const cardsRevealed = useSelector((state) => state.game.cardsRevealed);
  const gameOver = useSelector((state) => state.game.gameOver);

  const handleClick = () => {
    if (!gameInProgress || cardsRevealed || gameOver) return;
    dispatch(flipCard(id));
    dispatch(checkCardChoice(id));
  };

  return (
    <div className="card m-2" onClick={handleClick}>
      <div className={`card-inner ${isFlipped ? "flip" : ""}`}>
        <div className="card-front">
          <img
            src={frontImage}
            alt="Front"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-back">
          <img
            src={backImage}
            alt="Back"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
