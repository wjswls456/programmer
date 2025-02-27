// 이코드로 하면 런타임 에러가 뜸
function solution(park, routes) {
    let start = [0,0]
    
    for(let i =0; i<park.length;i++){
        for(let j=0; j<park[i].length;j++){
            if(park[i][j] === "S") {
                start = [i,j];
                break
            }
        }
    }

    

    for(let i=0;i<routes.length;i++){
        
        let direction = routes[i].split(" ")[0]
        let count = Number(routes[i].split(" ")[1])
        let [startX,startY] = start
        let [currentX,currentY] =start
        let valid= true

        
        for(let step =1;step<=count;step++){

            if(direction === "N"){
                currentX = startX -1*step
            } else if(direction === "S"){
                currentX = startX +1*step
            }else if(direction === "W"){
                currentY = startY-1*step
            }else if(direction === "E"){
                currentY = startY+1*step
            }

            if(currentX < 0 || currentX >= park.length || currentY < 0 || currentY >=park[0].length ||
                park[currentX][currentY] === "X"
            ){
                valid =false
                break;    
            }

        }

        if(valid){
            start = [currentX,currentY]
        } 
    }
    return start;

}

// solution(["SOO","OOO","OOO"],["E 2","S 2","W 1"])
solution(["SOO","OXX","OOO"],["E 2","S 2","W 1"])
