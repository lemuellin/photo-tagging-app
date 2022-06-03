let count = 0;

const photoClick = (e) => {
    const target = document.querySelector('.target');
    if(count%2 === 0){
        let shift = window.innerWidth * 5 / 100;
        target.style.display = 'flex';
        target.style.left = `${e.nativeEvent.offsetX - shift}px`;
        target.style.top = `${e.nativeEvent.offsetY - shift}px`;
    }else{
        target.style.display = 'none';
    }
    count+=1;
}

export default photoClick;