import ddClick from "../functions/ddClick";
import '../style/Target.css';

const Target = () => {
    return(
        <div className='target'>
            <div className='targetBox'></div>
            <div className='dropdown'>
              <button className="ddOption" onClick={ddClick}>Octopus</button>
              <button className="ddOption" onClick={ddClick}>Turtle</button>
              <button className="ddOption" onClick={ddClick}>Hippo</button>
            </div>
        </div>
    );
}

export default Target;