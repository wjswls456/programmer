function solution(players, callings) {
    let playerToIndex = {};
    let indexToPlayer = [...players];
    
   
    for (let i = 0; i < players.length; i++) {
        playerToIndex[players[i]] = i;
    }

    for(let call of callings) {
        let curIndex = playerToIndex[call];
        let frontIndex = curIndex -1;

        let frontPlayer = indexToPlayer[frontIndex];

        [indexToPlayer[frontIndex],indexToPlayer[curIndex]] = [indexToPlayer[curIndex],indexToPlayer[frontIndex]]

        playerToIndex[frontPlayer] = curIndex
        playerToIndex[call] = frontIndex

    }
   

    return indexToPlayer;
    
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"],["kai", "kai", "mine", "mine"])) // ["mumu", "kai", "mine", "soe", "poe"]
// ["mumu", "soe", "kai","poe", "mine"], ["mumu","kai", "soe" ,"poe", "mine"],["mumu","kai", "soe" ,"mine","poe"]
console.log(solution(["mumu", "soe", "poe", "kai", "mine"],["soe","mine", "kai", "kai"])) //["soe","mumu","kai","poe","mine"] 