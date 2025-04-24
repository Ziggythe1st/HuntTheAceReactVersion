import React from "react";

function Card({ imagePath }) {
  return (
    <div className="w-[157px] h-[220px] border-2 border-black m-2">
      <img src={imagePath} alt="Card" className="w-full h-full object-cover" />
    </div>
  );
}

export default Card;
