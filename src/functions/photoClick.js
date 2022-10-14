let count = 0;

const photoClick = (e) => {
    const target = document.querySelector('.target');
    let wideScreenShift = (window.innerWidth - 1440)/2;

    if(count%2 === 0){
        let shift = 75;
        target.style.display = 'flex';
        if(window.innerWidth > 1440){
            target.style.left = `${e.nativeEvent.offsetX - shift + wideScreenShift}px`
        }else{
            target.style.left = `${e.nativeEvent.offsetX - shift}px`;
        }
        target.style.top = `${e.nativeEvent.offsetY - shift}px`;
    }else{
        target.style.display = 'none';
    }
    count+=1;
}

export default photoClick;