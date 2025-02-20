function solution(Num) {

    //합이 10이 되는 조합
    let result = []

    function backtrack(sum,selectedNum,start) {

        if(sum == 10){
            result.push(selectedNum)
            return;
        }

        for(let i=start;i<=Num;i++){
            if(sum+i<=10){
                backtrack(i+sum,selectedNum.concat(i),i+1)
            }
            
        }

    }
    backtrack(0,[],1)
    return result;
}



console.log(solution(5)) //[[1, 2, 3, 4],[1,4,5],[2,3,5]]
console.log(solution(2))
console.log(solution(7)) //[[1, 2, 3, 4],[1,2,7],[1,3,6],[1,4,5],[2,3,5],[3,7],[4,6]]