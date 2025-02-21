function solution(number) {
    var answer = 0;
    
    
    function backtrack(start,current,sum){
        if(current.length ===3){
            if(sum == 0){
                answer++
            }
            return;
        }
        for( let i =start; i < number.length;i++){
            current.push(number[i]); // 현재 숫자 추가
            backtrack(i + 1, current,sum+number[i]); // 다음 숫자 선택
            current.pop(); // 선택한 숫자 제거 (백트래킹)
        }

    }
    backtrack(0,[],0)
    return answer;
}


solution([-2,3,0,2,0,5])
solution([-3,-2,-1,0,1,2,3])
solution([-1,1,-1,1])