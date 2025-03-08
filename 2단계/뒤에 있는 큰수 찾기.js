function solution(numbers) {
    let stack = [];
    let answer = new Array(numbers.length).fill(-1); // 기본값 -1로 초기화

    for (let i = numbers.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= numbers[i]) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            answer[i] = stack[stack.length - 1];
        }
        
        stack.push(numbers[i]);
    }

    return answer;
}


//제한사항--> 완전 탐색으로 풀면 안돼
//4 ≤ numbers의 길이 ≤ 1,000,000
//1 ≤ numbers[i] ≤ 1,000,000