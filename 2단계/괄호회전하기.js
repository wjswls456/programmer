function solution(s) {
    var answer = 0;

    function isValid(s){
        let arr= [];
        let brackets  = {"]":"[","}":"{",")":"("}
        let status = true;

        for(let index of s){
            if(index === "(" || index === "{"||index === "["){
                arr.push(index)
            } else {
                if(arr.length == 0 || arr.pop() !== brackets[index]){
                    return false;
                }
            }
        }

        return status;

    }

    for(let i =0; i<s.length;i++){

        if(isValid(s)){
            answer++
        }


        s = s.slice(1)+s[0]
    }
    return answer;
}

console.log(solution("[](){}"))
console.log(solution("}]()[{"))
console.log(solution("[)(]"))
console.log(solution("}}}"))
console.log(solution("{(})")) //0
