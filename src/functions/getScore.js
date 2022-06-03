import { db } from "../firestore";
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const getScore = async () => {
    let scoreList = [];
    const leaderboardRef = collection(db, 'LeaderBoard');
    const leaderboardQuery = query(leaderboardRef, orderBy('score', 'asc'), limit(5));
    const querySnapshot = await getDocs(leaderboardQuery);
    querySnapshot.forEach(player => {
        scoreList.push([player.id, player.data()]);
    });
    return scoreList;
}

export default getScore;