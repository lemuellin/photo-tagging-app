import { db } from "../firestore";
import { collection, getDocs } from 'firebase/firestore';
import placeMarker from "./placeMarker";

const checkCoordinates = async (pos) => {
    const coordinatesSnapshot = await getDocs(collection(db, "Coordinates"));
    const coordinatesList = coordinatesSnapshot.docs.map((coordinate) => [coordinate.id, coordinate.data()]);

    let shift = 75;
    let wideScreenShift = (window.innerWidth - 1440)/2;
    
    // original image: 3407 x 1500 px
    let pointerX;
    if(window.innerWidth > 1440){
        pointerX = Number(document.querySelector('.target').style.left.slice(0,-2))  + shift - wideScreenShift;
    }else{
        pointerX = Number(document.querySelector('.target').style.left.slice(0,-2))  + shift;
    }
    
    let pointerY = Number(document.querySelector('.target').style.top.slice(0,-2))  + shift;
    let centerX = coordinatesList[pos][1].X;
    let centerY = coordinatesList[pos][1].Y;

    // if widescreen, pointerX don't minus 75, intereact with window width
    // delta is around 30-35
    // try limiting the width of img to 1440(?) 


    let distanceX = Math.abs(centerX - pointerX);
    let distanceY = Math.abs(centerY - pointerY);
    let boundary = Math.abs(coordinatesList[pos][1].size) / 2;

    if(distanceX > boundary || distanceY > boundary){
        const errMsg = document.querySelector('.errMsg');
        errMsg.style.display = 'flex';
        if(window.innerWidth > 1440){
            errMsg.style.left = `${pointerX - shift + wideScreenShift}px`;
        }else{
            errMsg.style.left = `${pointerX - shift}px`;
        }
        errMsg.style.top = `${pointerY - shift}px`;
        const clearErrMsg = () => {
            errMsg.style.display = 'none';
        }
        setTimeout(clearErrMsg,500);
    }else{
        if(window.innerWidth > 1440){
            placeMarker(pos, centerX, centerY, shift, wideScreenShift);
        }else{
            placeMarker(pos, centerX, centerY, shift, 0);
        }
    }
};

export default checkCoordinates;