
// 내가 풀었는데 시간복잡도가 높음
function solution(n, m, section) {
    var answer = 0;
    let arr = Array.from({length:n},()=>true)
    
    for(let i of section){
        arr[i-1] = false
    }
    let status = true
    let index = -1
    while(status){
        index = arr.indexOf(false)

        if(index == -1){
            status = false
            return answer
        }

        for(let i =index;i<index+m;i++){
            if(i>=n){
                break;
            }
            if(arr.indexOf(false) == -1){
                answer++
                return answer
            }
            arr[i] = true

        }
        answer++
    }    
    return answer
}

// 색칠한곳이랑 다음 색칠할곳을 찾기

function solution(n, m, sections) {
    let answer = 0
    let painted = 0

    for(let section of sections ){
        if(painted < section){
            answer++
            painted = section+m-1
        }
    }

    return answer
}



console.log(solution(8,4,[2, 3, 6]))//	2
console.log(solution(5,4,[1, 3]))//	1
console.log(solution(4,1,[1, 2, 3, 4]))//	4
console.log(solution(4,1,[]))//	0
console.log(solution(10,2,[1,3,6,8,10])) // 5