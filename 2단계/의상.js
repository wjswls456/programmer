function solution(clothes) {
    let clotheMap = new Map();

    for(let [_,type] of clothes) {
        clotheMap.set(type,(clothMap.get(type) ||0)+1)
    }

    let answer = 1;

    for(let count of clotheMap.values()){
        answer *= (count + 1);
    }
    return answer -1 
}