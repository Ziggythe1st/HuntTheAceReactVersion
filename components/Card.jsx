import React from "react";
import { useDispatch } from "react-redux";
import { flipCard } from "../features/cardSlice";

function Card({ id, frontImage, backImage, isFlipped }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(flipCard(id)); // This flips the card
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
