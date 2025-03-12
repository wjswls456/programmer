function solution(order) {
    let subContainer = []
    let index = 0;
    var answer = 0;
    

    for(let box=1;box<=order.length;box++){
        subContainer.push(box)

        while(subContainer.length > 0 && subContainer[subContainer.length-1] === order[index]){
            subContainer.pop();
            index++;
            answer++;
        }
    }
    return answer;
}


// 1번 상자부터 n번 상자까지 번호가 증가하는 순서대로 컨테이너 벨트
// 택배 기사님이 미리 알려준 순서에 맞게 영재가 택배상자를 실어야 합니다.

// console.log(solution([4, 3, 1, 2, 5])) // 2
console.log(solution([5, 4, 3, 2, 1])) // 5