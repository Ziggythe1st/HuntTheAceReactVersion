import React, { useEffect } from "react";
import Header from "../components/Header";
import CardGrid from "../components/CardGrid";
import StatusBar from "../components/StatusBar";
import { useDispatch } from "react-redux";
import { setCards } from "../features/cardSlice";
import { cardObjectDefinitions } from "../helpers/cardData";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCards(cardObjectDefinitions));
  }, [dispatch]);

  return (
    <div className="container mx-auto flex flex-col items-center p-4">
      <Header />
      <CardGrid />
      <StatusBar />
    </div>
  );
}

export default App;
