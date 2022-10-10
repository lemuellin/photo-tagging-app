import '../style/Welcome.css';
import { Link } from 'react-router-dom';
import Hippo from '../asset/Hippo.jpeg';
import Octopus from '../asset/Octopus.jpeg';
import Turtle from '../asset/Turtle.jpeg';

const Welcome = () => {
    return(
        <div className='welcome'>
            <h1>Oh no, you are lost in the WooHoo Water Park!</h1>
            <h2>Please find your friends, make sure to memorize how they look before clicking START.</h2>
            <div className='imgTable'>
                <img className="welcomeImg" alt='Octopus' src={Octopus}/>
                <img className="welcomeImg" alt='Turtle' src={Turtle}/>
                <img className="welcomeImg" alt='Hippo' src={Hippo}/>
                <h3 className="welcomeName">Mr. Octopus</h3>
                <h3 className="welcomeName">Turtle</h3>
                <h3 className="welcomeName">Ms. Hippo</h3>
            </div>
            <Link to='/game'>
                <button className='start'>START</button>
            </Link>
        </div>
    );
}

export default Welcome;