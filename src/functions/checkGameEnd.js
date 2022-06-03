const checkGameEnd = () => {
    const markerOct = document.querySelector('.markerOct');
    const markerTurt = document.querySelector('.markerTurt');
    const markerHippo = document.querySelector('.markerHippo');
    if(markerOct.style.display === 'block' && markerTurt.style.display === 'block' && markerHippo.style.display === 'block'){
        return 'end';
    }else{
        return null;
    }
}

export default checkGameEnd;