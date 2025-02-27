function solution(k, score) {
    var answer = [];
    let rank = []
    
    
    
    for(let i =0;i<score.length;i++){


        //무조건 순위권 드는 경우
        if(rank.length < k){
            rank.push(score[i])
            
        } else {
            if(rank[rank.length-1] < score[i]){
                    rank.pop()
                    rank.push(score[i])
            }     
        }
        rank.sort((a,b)=>b-a)
        answer.push(rank[rank.length-1])
        
    }
    return answer;
}

