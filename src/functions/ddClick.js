import checkCoordinates from "./checkCoordinates";

const ddClick = (e) => {
    switch(e.target.textContent){
        case 'Octopus':
            checkCoordinates(1);
        break;

        case 'Turtle':
            checkCoordinates(2);
        break;

        case 'Hippo':
            checkCoordinates(0);
        break;

        default:
        break;
    }

    const target = document.querySelector('.target');
    target.style.display = 'none';
}

export default ddClick;