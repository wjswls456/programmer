// 왼쪽 오른쪽 비교할때 좋은 코드인것 같음

function solution(s) {
    let count = 0; // 분리된 문자열 개수
    let i = 0; // 인덱스 포인터
    
    while(i < s.length){
        let x = s[i];
        let xCount = 0, otherCount = 0;

        while(i < s.length){
            s[i] === x ? xCount: otherCount
            i++
            if(xCount == otherCount) break
        }
        count++
    }
    
    return count;
}

// 테스트
// console.log(solution("banana")); // 3
// console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3