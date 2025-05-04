import React, { useEffect } from "react";
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
  const backImg = "public/card-back-blue.png"; // TODO: fix path in production

  useEffect(() => {
    if (gameInProgress && cardsRevealed) {
      // 1. Reveal all cards after short delay
      const revealTimer = setTimeout(() => {
        dispatch(revealAllCards());
      }, 2000);

      // 2. Then begin next round or end game
      const nextRoundTimer = setTimeout(() => {
        if (round >= 4) {
          dispatch(setGameOver());
        } else {
          dispatch(startNewRound());

          dispatch(hideAllCards());

          setTimeout(() => {
            const shuffled = shuffleCards(cards);
            dispatch(setShuffleCards(shuffled));
          }, 300); // brief delay to avoid ace being visible during shuffle
        }
      }, 4000);

      return () => {
        clearTimeout(revealTimer);
        clearTimeout(nextRoundTimer);
      };
    }
  }, [cardsRevealed, gameInProgress, dispatch]);

  // Debug: round/score changes
  useEffect(() => {
    console.log(`🧩 Round: ${round}, 🏆 Score: ${score}`);
  }, [round, score]);

  // Debug: card flip states
  useEffect(() => {
    if (cards.length > 0) {
      console.log(
        "Card flipped states:",
        cards.map((c) => ({ id: c.id, isFlipped: c.isFlipped }))
      );
    }
  }, [cards]);

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
