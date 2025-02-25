// 두바퀴가 도는 경우도 생각해야 함
function solution(s, skip, index) {
    var answer = '';
    let alphabets = []
    
    for(let alphabet of "abcdefghijklmnopqrstuvwxyz"){     
        if(!skip.includes(alphabet)) alphabets.push(alphabet)
    }

    for(let i =0;i<s.length;i++){
    
        let findIndex = alphabets.indexOf(s[i])
        let sumIndex = findIndex+index
        let newIndex = sumIndex%alphabets.length
        answer +=alphabets[newIndex]
    }   
    return answer;
}

console.log(solution("aukks","wbqd",5)) //"happy"
console.log(solution("zzzz","abcd",1))// eeee
console.log(solution("s","abcdefghij",20))// w
