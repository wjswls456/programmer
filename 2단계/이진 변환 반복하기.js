
function solution(s) {
    let count = 0 
    let i = 0
    
   
    
    while(s !== "1"){
        let length = s.length
        let replace = s.replaceAll("0","")
        count += length - replace.length
        s = replace.length.toString
        i++
    }
    
     
    return [i,count];
}

console.log((solution("110010101001",[3,8])))