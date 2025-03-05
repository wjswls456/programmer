function solution(k, dungeons) {
    let maxCount = 0;
    let visited = new Array(dungeons.length).fill(false)


    function dfs(k,count){
        maxCount = Math.max(maxCount,count)
        for(let i=0;i<dungeons.length;i++){
            if(!visited[i] && k >= dungeons[i][0]){
                visited[i] = true;
                dfs(k-dungeons[i][1],count+1)
                visited[i] = false;
            }

        }
    } 
    dfs(k,0)
    return maxCount;
}
solution(80,[[80,20],[50,40],[30,10]])