function solution(n,a,b){
    let count =1 

    while(n>=2){
        n= n /2 
        if(a%2 == 0 && a-1 == b){
            return count
        } else if(a%2 == 1 && a+1 == b){
            return count
        }
        a= Math.ceil(a/2)
        b=Math.ceil(b/2)
        count++
    }
    return count;
}

console.log(solution(8,4,7)) // 3
console.log(solution(1048576, 12345, 12346))