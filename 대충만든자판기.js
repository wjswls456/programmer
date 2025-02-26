function solution(keymaps, targets) {
    var answer = [];
    let count ={}
    
    for(let keymap of keymaps){
        for(let i =0;i<keymap.length;i++){
            if(!count[keymap[i]] || count[keymap[i]] > i+1){
                count[keymap[i]] = i+1
            } 
        }
    }
    for(let target of targets){
        let sum = 0
        for(let i of target){

            if(count[i] === undefined){
                sum = -1
                break;
            }
            sum +=count[i]
        }
        answer.push(sum)

    }
    return answer;
}

// console.log(solution(["ABACD", "BCEFD"],["ABCD","AABB"])) //[9, 4]
console.log(solution(["AA"],["B"])) //[-1]
console.log(solution(["AA"],["B","AA"])) //[-1]