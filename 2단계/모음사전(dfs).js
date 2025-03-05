function solution(word) {
    var answer = 0;
    let words = ['A','E','I','O','U']
    let found = false
    
    function dfs(char){
        
        if(char === word){
            found = true
            return answer
        }
        if(char.length >= 5 || found)  return
            for(let i=0;i<words.length;i++){
                answer++
                dfs(char+words[i])
                if(found) return;
                
            } 
    }
    dfs("")
    return answer;
}

console.log(solution("AAAAE",	6))
// console.log(solution("AAAE"	,10))
// console.log(solution("I"	,1563))
// console.log(solution("EIO"	,1189))