import { db } from "../firestore";
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const getScore = async () => {
    let scoreList = [];
    const leaderboardRef = collection(db, 'LeaderBoard');
    const leaderboardQuery = query(leaderboardRef, orderBy('score', 'asc'), limit(5));
    const querySnapshot = await getDocs(leaderboardQuery);
    querySnapshot.forEach(player => {
        let scoreString = JSON.stringify(player.data().score);
        let score = JSON.parse(scoreString);
        scoreList.push({name: player.id, score: score});
    });
    return scoreList;
}

export default getScore;