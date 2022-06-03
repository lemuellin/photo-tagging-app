import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './style/App.css';
import WaterPark from './asset/WaterPark.jpeg';
import photoClick from "./functions/photoClick";
import checkGameEnd from "./functions/checkGameEnd";
import Target from "./component/Target";

function App() {
  const[seconds, setSeconds] = useState(0);
  const[gameStatus, setGameStatus] = useState(null);

  const nav = useNavigate();
  const displayLeaderBoard = () => {
    nav('/result', {state: {score: seconds}});
  }

  let interval = null;

  useEffect(() => {
    if (gameStatus === null){
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }else{
      displayLeaderBoard();
    }
    setGameStatus(checkGameEnd());
    return () => clearInterval(interval);
  },[gameStatus,seconds]);

  return (
    <div>
      <div className='header'>
        <h1>Find Your Animal Friends</h1>
      </div>
      <div className='content'>
        <img src={WaterPark} alt='background' className='background' onClick={photoClick}/>
        <Target/>
        <div className='markerOct'></div>
        <div className='markerTurt'></div>
        <div className='markerHippo'></div>
        <div className='errMsg'>NOPE</div>
      </div>    
    </div>
  );
}

export default App;