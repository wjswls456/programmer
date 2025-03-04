function solution(elements) {
    let n = elements.length;
    let uniqueSums = new Set();
    let extended = elements.concat(elements); // 원형 수열 표현

    for (let length = 1; length <= n; length++) {
        let sum = extended.slice(0, length).reduce((a, b) => a + b, 0);
        uniqueSums.add(sum);


        

        for (let start = 1; start < n; start++) {
            // Sliding Window(슬라이딩 윈도우) 방식
            // "이전 합에서 첫 번째 값을 빼고, 새로운 값을 추가" 하면 반복적인 계산을 하지 않아도 됨!
            sum = sum - extended[start - 1] + extended[start + length - 1];
            uniqueSums.add(sum);
        }
    }

    return uniqueSums.size;
}




solution([7,9,1,1,4])

