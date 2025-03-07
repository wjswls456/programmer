function solution(numbers) {
    var answer = 0;
    let visited = new Array(numbers.length).fill(false)
    let uniqueNumbers = new Set();
    

    function isPrime(num) {
        if (num < 2) return false; // 2보다 작은 수는 소수가 아님
        for (let i = 2; i <= Math.sqrt(num); i++) { // 제곱근까지만 검사
            if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
        }
        return true;
    }

    function dfs(number){

        if(number.length > numbers.length) return

        let num = Number(number);
        // dfs 전체 탐색하기때문에 중복이 일어날 수 있음
        if (!uniqueNumbers.has(num) && isPrime(num)) {
            uniqueNumbers.add(num);
            answer++;
        }


        for(let i=0;i<numbers.length;i++){
            if(!visited[i]){
                visited[i] =true
                dfs(number+numbers[i])
                visited[i] =false
            }

            
        }

    }

    dfs("")
    return answer;
}



console.log(solution("17"))
console.log(solution("011"))


