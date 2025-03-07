function solution(maps) {
    
    let m = maps.length
    let n = maps[0].length
    let start,lever,exit
    
    for(let i=0;i<m;i++){
        for(let j=0; j<n;j++){
            if(maps[i][j] === "S") start = [i,j]
            if(maps[i][j] === "L") lever = [i,j]
            if(maps[i][j] === "E") exit = [i,j]
        }
    }
    let directions = [[1,0],[-1,0],[0,1],[0,-1]]
    
    function bfs(start,target){
        let isVisited = Array.from({length:m},()=>Array(n).fill(false))
        let queue = [[start[0], start[1], 0]];
        isVisited[start[0]][start[1]] = true;
        while(queue.length>0){
            let [x, y, count] = queue.shift();
            if(x === target[0] && y === target[1]) return count
            for(let [dx,dy] of directions){
                let nx = x+dx
                let ny = y+dy
                if(m > nx && n > ny && nx >= 0 && ny >=0 && !isVisited[nx][ny] && maps[nx][ny] !== 'X'){
                    isVisited[nx][ny] = true
                    queue.push([nx,ny,count+1])
                }
            }
        }
        
        return -1
    }
    
    let startToLever = bfs(start,lever)
    if(startToLever === -1) return -1
    
    let leverToexit = bfs(lever,exit)
    if(leverToexit === -1) return -1
    return startToLever+leverToexit
}
console.log(solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"]))
        