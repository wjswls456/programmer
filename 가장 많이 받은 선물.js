function solution(friends, gifts) {
    var answer = 0;

    let friendsStatus = {}

    friends.forEach(element => {
        
        let expectFriends = friends.filter(friend => friend !== element)
        let friendObj = {}
        for(let expectFriend of expectFriends){
            friendObj[expectFriend] = 0
        }
        let newfriendObj = {...friendObj} 
        friendsStatus[element] = {
            sendTotal: 0,
            receiveTotal: 0,
            sendPeoples: friendObj,
            receivePeoples: newfriendObj,
            giftScore: 0, // 선물 지수를 저장할 필드 추가
        };
    });

    
    

    for(let gift of gifts){
        let splitGift = gift.split(" ")
        let sendGift = splitGift[0]
        let receiveGift = splitGift[1]
        friendsStatus[sendGift]['sendTotal']++
        friendsStatus[sendGift]['sendPeoples'][receiveGift]++

        friendsStatus[receiveGift]['receiveTotal']++
        friendsStatus[receiveGift]['receivePeoples'][sendGift]++
    }

    for (let friend of friends) {
        const sendTotal = friendsStatus[friend].sendTotal;
        const receiveTotal = friendsStatus[friend].receiveTotal;
        friendsStatus[friend].giftScore = sendTotal - receiveTotal; // 선물 지수 계산
    }


        // 4. 다음 달 선물 예측
    const nextMonthGifts = new Array(friends.length).fill(0); // 다음 달 받을 선물 수
    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const friendA = friends[i];
            const friendB = friends[j];

            const sendAtoB = friendsStatus[friendA].sendPeoples[friendB];
            const sendBtoA = friendsStatus[friendB].sendPeoples[friendA];

            if (sendAtoB > sendBtoA) {
                nextMonthGifts[i]++;
            } else if (sendAtoB < sendBtoA) {
                nextMonthGifts[j]++;
            } else {
                const giftScoreA = friendsStatus[friendA].giftScore;
                const giftScoreB = friendsStatus[friendB].giftScore;

                if (giftScoreA > giftScoreB) {
                    nextMonthGifts[i]++;
                } else if (giftScoreA < giftScoreB) {
                    nextMonthGifts[j]++;
                }
            }
        }
    }

    // 5. 가장 많은 선물을 받는 친구의 선물 수 반환
    answer = Math.max(...nextMonthGifts);
    return answer;    
}


console.log(solution(["muzi", "ryan", "frodo", "neo"],["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]))
// console.log(solution(["a", "b", "c"],["a b", "b a", "c a", "a c", "a c", "c a"]))
