function solution(a, b, n) {
    let answer = 0;
    
    // while문으로 해결해야함
    
    while(a <= n){
        
        let reward=Math.floor(n/a)
        answer +=reward*b
        n = n-(reward*a)+reward*b
    }

    return answer;
}

console.log(solution(2,1,1000000)) // 19
console.log(solution(3,1,1000000)) // 9


