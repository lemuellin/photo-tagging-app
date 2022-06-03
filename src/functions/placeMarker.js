const placeMarker = (pos, centerX, centerY, shift) => {
    switch(pos){
        case 0:
            const markerHippo = document.querySelector('.markerHippo');
            markerHippo.style.display = 'block';
            markerHippo.style.left = `${centerX - shift}px`;
            markerHippo.style.top = `${centerY - shift}px`;
        break;

        case 1:
            const markerOct = document.querySelector('.markerOct');
            markerOct.style.display = 'block';
            markerOct.style.left = `${centerX - shift}px`;
            markerOct.style.top = `${centerY - shift}px`;
        break

        case 2:
            const markerTurt = document.querySelector('.markerTurt');
            markerTurt.style.display = 'block';
            markerTurt.style.left = `${centerX - shift}px`;
            markerTurt.style.top = `${centerY - shift}px`;
        break;

        default:
        break;
    }
}

export default placeMarker;