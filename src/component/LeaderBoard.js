import '../style/LeaderBoard.css';
import getScore from '../functions/getScore';
import { useLocation, useNavigate } from 'react-router-dom';
import sendScore from '../functions/sendScore';

const LeaderBoard = () => {
    const location = useLocation();

    let scoreList = getScore();
    scoreList.then((data) => {
        const first = document.querySelector('.first');
        const second = document.querySelector('.second');
        const third = document.querySelector('.third');
        const fourth = document.querySelector('.fourth');
        const fifth = document.querySelector('.fifth');
        first.textContent = `1. ${data[0][0]}: ${data[0][1].score} seconds`;
        second.textContent = `2. ${data[1][0]}: ${data[1][1].score} seconds`;
        third.textContent = `3. ${data[2][0]}: ${data[2][1].score} seconds`;
        fourth.textContent = `4. ${data[3][0]}: ${data[3][1].score} seconds`;
        fifth.textContent = `5. ${data[4][0]}: ${data[4][1].score} seconds`;
    });

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
                    <li className='first'></li>
                    <li className='second'></li>
                    <li className='third'></li>
                    <li className='fourth'></li>
                    <li className='fifth'></li>
                </ol>
            </div>
            <button type='button' onClick={restart}>Restart</button>
        </div>
    );
}

export default LeaderBoard;