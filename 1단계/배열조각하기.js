function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        const index = query[i];
        if (i % 2 === 0) {  // 짝수 인덱스
            arr = arr.slice(0, index+1);  // index 뒤의 부분을 잘라냄
        } else {  // 홀수 인덱스
            arr = arr.slice(index);  // index 앞의 부분을 잘라냄
        }
    }
    return arr;
}



solution([0, 1, 2, 3, 4, 5], [4, 1, 2])