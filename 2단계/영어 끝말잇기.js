function solution(n, words) {
    var answer = [0,0];
    let emptyObj= {}
    emptyObj[words[0]] = true


    for(let i =1; i < words.length ; i++){

        let prevWord = words[i - 1];
        let currWord = words[i];

        if(!emptyObj[words[i]]){
            if( prevWord[prevWord.length - 1] !== currWord[0]){
                answer = [(i % n) + 1, Math.floor(i / n) + 1]
                return answer
                
            } else {
                emptyObj[words[i]] = true
            }
            
        } else {
            

            answer = [(i % n) + 1, Math.floor(i / n) + 1]
            return answer
            
        }

    }
    

    return answer;
}

// 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
// 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 이전에 등장했던 단어는 사용할 수 없습니다.
// 한 글자인 단어는 인정되지 않습니다.


// 1번 사람 : tank, wheel, mother , 1 ,4 
// 2번 사람 : kick, land, robot ,2  , 5
// 3번 사람 : know, dream, tank, 3,, 6


console.log(solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))//	[3,3]
console.log(solution(5,["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))//[0,0]
console.log(solution(2,["hello", "one", "even", "never", "now", "world", "draw"]))//	[1,3]