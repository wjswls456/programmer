//시간 초과 오류가 발생했음 .. ..
// 해결 방법이 있을까? 뭐을 더 줄일까?
// ingredient.join("") --> 문자열 탐색 및 변환 비용증가
// replace()를 여러 번 호출하면 O(N²) 이상의 복잡도 발생

function solution1(ingredient) {
    var answer = 0;
    

    let regex = new RegExp("(1231)")
    let status = true
    let joinIngredientStr = ingredient.join("")
    let replaceStr = joinIngredientStr
    

    while(status){

        replaceStr = replaceStr.replace(regex,"*")

        if(replaceStr.includes("*")){
            answer++
            replaceStr = replaceStr.replace("*","")
        }else{
            status = false
        }
        
    }
    return answer;
}


function solution(ingredient) {
    var answer = 0;
    let stack  = []
    

   for(let item of ingredient){
    stack.push(item)

    if(stack .length >=4 && stack.slice(-4).join("") ==="1231"){
        stack.splice(-4)
        answer++
    }
   }
    return answer;
}


console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])) //2
console.log(solution([2, 1, 2,3, 1, 1, 2, 3, 2])) //2