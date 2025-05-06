import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { flipCard } from "../features/cardSlice";
import { checkCardChoice } from "../features/gameSlice";

function Card({ id, frontImage, backImage, isFlipped, extraClass = "" }) {
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
    <div
      className={`card m-1 w-[90px] h-[135px] sm:w-[120px] sm:h-[180px] md:w-[157px] md:h-[220px] focus:outline-none focus:ring-2 focus:ring-blue-300 ${extraClass}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      tabIndex={0}
      role="button"
      aria-label={`Card ${id} ${isFlipped ? "face up" : "face down"}`}
    >
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
