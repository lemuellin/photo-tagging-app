import { db } from "../firestore";
import { collection, getDocs } from 'firebase/firestore';
import placeMarker from "./placeMarker";

const checkCoordinates = async (pos) => {
    const coordinatesSnapshot = await getDocs(collection(db, "Coordinates"));
    const coordinatesList = coordinatesSnapshot.docs.map((coordinate) => [coordinate.id, coordinate.data()]);

    let pointerX = Number(document.querySelector('.target').style.left.slice(0,-2))  + window.innerWidth * 5 / 100;
    let pointerY = Number(document.querySelector('.target').style.top.slice(0,-2))  + window.innerWidth * 5 / 100;
    let centerX = coordinatesList[pos][1].X / 1500 * window.innerWidth;
    let centerY = coordinatesList[pos][1].Y / 3407 * (3407 / 1500 * window.innerWidth);

    let distanceX = Math.abs(centerX - pointerX);
    let distanceY = Math.abs(centerY - pointerY);
    let boundary = Math.abs(coordinatesList[pos][1].size) / 2;
    let shift = window.innerWidth * 5 / 100;

    if(distanceX > boundary || distanceY > boundary){
        const errMsg = document.querySelector('.errMsg');
        errMsg.style.display = 'flex';
        errMsg.style.left = `${pointerX - 2 * shift}px`;
        errMsg.style.top = `${pointerY - shift}px`;
        const clearErrMsg = () => {
            errMsg.style.display = 'none';
        }
        setTimeout(clearErrMsg,500);
    }else{
        placeMarker(pos, centerX, centerY, shift);
    }
};

export default checkCoordinates;