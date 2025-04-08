import { useEffect } from "react";
import { createCards } from "../features/maintainGame";

const Cards = () => {
  useEffect(() => {
    createCards();
  }, []);

  return (
    <div className="card-container relative">
      <div className="card-pos-a"></div>
      <div className="card-pos-b"></div>
      <div className="card-pos-c"></div>
      <div className="card-pos-d "></div>
    </div>
  );
};

export default Cards;
