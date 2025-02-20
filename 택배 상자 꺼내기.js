function solution(n, w, num) {
    var answer = 0;
    const result = Array.from({length :Math.ceil(n/w)},()=>Array(w).fill(0))
    
    let rowStart = 0, rowEnd =Math.ceil(n/w); // 행 범위
    let count = 1
    //가로로 택배 상자를 w개 놓았다면 
    // 이번에는 오른쪽에서 왼쪽으로 가면서 그 위층에 택배 상자를 한 개씩 놓습니다
    // 창고에 있는 택배 상자의 개수를 나타내는 정수 n
    // 가로로 놓는 상자의 개수를 나타내는 정수 w

    for(let i=0;i<rowEnd;i++){
            if(i%2===0){
                for(let j=0;j<w;j++){
                    if(n>=count){
                        result[i][j] = count;
                        count++;
                    }
                    
                }
            } else {
                for(let j=w-1;j>=0;j--){
                    if(n>=count){
                        result[i][j] = count;
                        count++;
                    }
                    
                }
            }
        }


    for(let i=0;i<rowEnd;i++){
        for(let j=0;j<w;j++){
            if(result[i][j] === num){
                if(result[rowEnd-1][j] !==0 ){
                    answer = rowEnd - i
                } else {
                    answer = rowEnd - i- 1
                }
            }
        }
    }
    return answer;
}

console.log(solution(22, 6, 12)) //2
console.log(solution(13, 3, 6))
console.log(solution(2, 2, 1)) //1

// 1 , 2



// 1,2,3,4,5,6
// 12,11,10,9,8,7
// 13,14,15,16,17,18
//       22,21,20,19