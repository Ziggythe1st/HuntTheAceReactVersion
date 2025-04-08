import { useSelector, useDispatch } from "react-redux";
import {
  resetScore,
  increaseByTwentyFive,
  increaseByFifty,
  increaseByHundred,
} from "../features/scoreSlice";
import { resetRounds, incrementByOne } from "../features/roundSlice";

let score = useSelector((state) => state.score.value);
let rounds = useSelector((state) => state.rounds.value);

const playGame = () => {
  const dispatch = useDispatch();
};

const Header = () => {

  return (
    <header>
      <div className="font-bold text-3xl">
        <h1>Hunt the Ace</h1>
      </div>
      <div className="header-round-info-container">
        <div className="header-img-container">
          <img src="images/AceSpades.png" alt="" className="header-img" />
        </div>
        <div className="header-score-container">
          <h2 className="score">
            Score&nbsp;<span className="badge">0</span>
          </h2>
        </div>
        <div className="header-round-container">
          <h2 className="round">
            Round&nbsp;<span className="badge">0</span>
          </h2>
        </div>
        <div className="header-status-info-container">
          <p className="current-status">
            Click 'Play Game' button to start game
          </p>
        </div>
      </div>
      <div className="header-button-container">
        <div className="game-play-button-container">
          <button onClick="" id="playGame" className="play-game">
            Play Game
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
