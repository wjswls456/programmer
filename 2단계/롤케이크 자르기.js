function solution(topping) {
    var answer = 0;
    let leftSet = new Set()
    let rightMap = new Map()


    for(let t of topping) {
        rightMap.set(t,(rightMap.get(t)||0)+1)
    }

    for(let t of topping) {
        leftSet.add(t)
        rightMap.set(t,rightMap.get(t)-1)
        if(rightMap.get(t) === 0){
            rightMap.delete(t)
        }

        if(rightMap.size === leftSet.size){
            answer++
        }
    }
   
    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]))
console.log(solution([1, 2, 3, 1, 4]))