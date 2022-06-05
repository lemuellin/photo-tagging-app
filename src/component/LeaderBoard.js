import '../style/LeaderBoard.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import sendScore from '../functions/sendScore';
import getScore from '../functions/getScore';
import uniqid from 'uniqid';

const LeaderBoard = () => {
    const [highscore, setHighscore] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const updateScore = async () => {
            let scoreList = await getScore();
            setHighscore(scoreList);    
        }
        updateScore();
    },[]);

    const submit = () => {
        // add to Firebase
        const name = document.querySelector('.userInput').value;
        const score = {score: location.state.score};
        sendScore(name, score);

        const submitButton = document.querySelector('.submit');
        submitButton.classList.add('clicked');
        submitButton.textContent = 'Submitted';
    }

    const nav = useNavigate();
    const restart = (e) => {
        e.preventDefault();
        nav('/photo-tagging-app');
    }

    return(
        <div className='leaderBoard'>
            <h1>Your score is {location.state.score} seconds.</h1>
            <div className='form'>
                <input placeholder="Your Name" className='userInput'/>
                <button onClick={submit} className='submit'>Submit</button>
            </div>
            <div className='topPlayers'>
                <ol>
                    <h3>Top Players</h3>
                    {highscore.map(leader => {
                        return(
                            <li key={uniqid()}>
                                {leader.name}: {leader.score} seconds
                            </li>
                        )
                    })}
                </ol>
            </div>
            <button type='button' onClick={restart}>Restart</button>
        </div>
    );
}

export default LeaderBoard;