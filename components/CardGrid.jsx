// ✅ CardGrid.jsx (simple version with flip + shake effect only)
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import {
  revealAllCards,
  hideAllCards,
  setShuffleCards,
} from "../features/cardSlice";
import { startNewRound, setGameOver } from "../features/gameSlice";
import { shuffleCards } from "../helpers/shuffleCards";

function CardGrid() {
  const dispatch = useDispatch();

  const gameInProgress = useSelector((state) => state.game.gameInProgress);
  const cardsRevealed = useSelector((state) => state.game.cardsRevealed);
  const cards = useSelector((state) => state.cards.cards);
  const round = useSelector((state) => state.game.round);
  const score = useSelector((state) => state.game.score);
  const backImg = "public/card-back-blue.png";

  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    if (gameInProgress && cardsRevealed) {
      const revealTimer = setTimeout(() => {
        dispatch(revealAllCards());
      }, 2000);

      const nextRoundTimer = setTimeout(() => {
        if (round >= 4) {
          dispatch(setGameOver());
        } else {
          dispatch(startNewRound());
          dispatch(hideAllCards());

          setTimeout(() => {
            setIsShuffling(true); // Start shuffle animation

            const shuffled = shuffleCards(cards);
            dispatch(setShuffleCards(shuffled));

            // Stop animation after it's done
            setTimeout(() => {
              setIsShuffling(false);
            }, 500);
          }, 300);
        }
      }, 4000); // <-- missing before

      return () => {
        clearTimeout(revealTimer);
        clearTimeout(nextRoundTimer);
      };
    }
  }, [cardsRevealed, gameInProgress, dispatch, round, cards]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 border p-4 max-w-md mx-auto">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          frontImage={card.imagePath}
          backImage={backImg}
          isFlipped={card.isFlipped}
          extraClass={isShuffling ? "shuffling" : ""}
        />
      ))}
    </div>
  );
}

export default CardGrid;
