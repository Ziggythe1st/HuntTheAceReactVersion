import React from "react";
import { useSelector } from "react-redux";

function StatusBar() {
  const statusMessage = useSelector((state) => state.game.statusMessage);
  const score = useSelector((state) => state.game.score);
  const round = useSelector((state) => state.game.round);

  return (
    <div className="mt-6 text-center font-semibold text-lg space-y-1">
      <p>🎯 Score: {score}</p>
      <p>🌀 Round: {round} / 4</p>
      <p className="text-blue-700 italic">{statusMessage}</p>
    </div>
  );
}

export default StatusBar;
