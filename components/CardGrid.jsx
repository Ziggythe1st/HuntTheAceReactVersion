import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { revealAllCards, hideAllCards } from "../features/cardSlice";
import { startNewRound, setGameOver } from "../features/gameSlice";

function CardGrid() {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cards);
  const round = useSelector((state) => state.game.round);
  const cardsRevealed = useSelector((state) => state.game.cardsRevealed);
  const backImg = "public/card-back-blue.png"; //remove public in full build

  useEffect(() => {
    if (cardsRevealed) {
      // Wait 2 seconds, then flip all cards
      const revealTimer = setTimeout(() => {
        dispatch(revealAllCards());
      }, 2000);

      const nextRoundTimer = setTimeout(() => {
        if (round >= 4) {
          dispatch(setGameOver());
        } else {
          dispatch(hideAllCards());
          dispatch(startNewRound());
        }
      }, 4000);

      // Cleanup the timer when component unmounts or re-renders
      return () => {
        clearTimeout(revealTimer);
        clearTimeout(nextRoundTimer);
      };
    }
  }, [cardsRevealed, dispatch]);

  return (
    <div className="grid grid-cols-2 gap-4 border p-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          frontImage={card.imagePath}
          backImage={backImg}
          isFlipped={card.isFlipped}
        />
      ))}
    </div>
  );
}

export default CardGrid;
