function solution(X, Y) {
    const xArr = new Array(10).fill(0)
    const yArr = new Array(10).fill(0)

    for(let char of X){
        xArr[Number(char)]++;
    }

    for(let char of Y){
        yArr[Number(char)]++;
    }

    let result = ""

    for(let d= 9;d >=0;d--){
        const commonCount = Math.min(xArr[d],yArr[d])
        if(commonCount > 0){
            result += d.toString().repeat(commonCount)
        }
    }

    if (result === "") return "-1";
    if (result[0] === "0") return "0";
    
    return result;
}

// console.log(solution("100","2345")) // -1
console.log(solution("100","203045")) // 0 
console.log(solution("100","123450")) // 10 
console.log(solution("12321","2345")) // 321
console.log(solution("5525","1255")) // 552
