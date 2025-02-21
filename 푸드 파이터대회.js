function solution(food) {
    var answer = [];
    //한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로
    //다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다
    //중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.
    for(let i =1;i<food.length;i++){
        let length = food[i] % 2 === 0  ? food[i]/2 : (food[i]-1)/2
        for(let j =0;j<length;j++){
            answer.push(i)
        }
    }
    
    return answer.join("")+"0"+answer.reverse().join("");
}

console.log(solution([1, 3, 4, 6]))
console.log(solution([1, 7, 1, 2]))
console.log(solution([1, 2, 2, 2, 2]))
// 2 ≤ food의 길이 ≤ 9 이부분이 중요했음