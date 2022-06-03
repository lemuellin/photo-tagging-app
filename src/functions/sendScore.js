import { db } from "../firestore";
import { setDoc, doc } from 'firebase/firestore';

const sendScore = async (name, score) => {
    await setDoc(doc(db, 'LeaderBoard', name), score);
}

export default sendScore;