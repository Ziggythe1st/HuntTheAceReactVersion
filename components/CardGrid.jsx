import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function CardGrid() {
  const cards = useSelector((state) => state.cards.cards);

  return (
    <div className="grid grid-cols-2 gap-4 border p-4">
      {cards.map((card) => (
        <Card key={card.id} imagePath={card.imagePath} />
      ))}
    </div>
  );
}

export default CardGrid;
