import React from "react";
import { useSelector } from "react-redux";

function StatusBar() {
  const statusMessage = useSelector((state) => state.game.statusMessage);

  return (
    <div className="mt-6 text-lg font-semibold text-center">
      {statusMessage}
    </div>
  );
}

export default StatusBar;
