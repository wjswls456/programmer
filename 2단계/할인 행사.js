function solution(want, number, discount) {
    var answer = 0;
    let wantObj = {}
    let test = []
    

    want.forEach((element,index) => wantObj[element] =number[index])

    // 문제점 계속 새로운 객체가 생성되고 있어서 시간 문제가 발생함
    for(let i=0;i<discount.length-10;i++){
        let empty = {}
        let status = true


        
        for(let j=i; j <i+10;j++){
            
            if(!empty[discount[j]]){
                empty[discount[j]] = 1
            } else {
                empty[discount[j]]++
            }
            if(!wantObj[discount[j]] || wantObj[discount[j]] < empty[discount[j]]){
                status= false
                break;
            }
            
        }
        if(status) {
            answer++
        }
    }
    return answer;
}

// 개선 버전

function solution(want, number, discount) {
    let answer = 0;
    let wantMap = new Map();

    // `want`와 `number`를 매핑하여 저장
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    let currentMap = new Map();

    // 초기 10일간 상품 개수 카운트
    for (let i = 0; i < 10; i++) {
        currentMap.set(discount[i], (currentMap.get(discount[i]) || 0) + 1);
    }

    // 초기 10일이 조건을 만족하면 count 증가
    if (isValid(wantMap, currentMap)) answer++;

    // 슬라이딩 윈도우 기법 사용하여 `discount` 탐색
    for (let i = 10; i < discount.length; i++) {
        let removeItem = discount[i - 10];
        let addItem = discount[i];

        // 이전 아이템 제거
        if (currentMap.get(removeItem) === 1) {
            currentMap.delete(removeItem);
        } else {
            currentMap.set(removeItem, currentMap.get(removeItem) - 1);
        }

        // 새로운 아이템 추가
        currentMap.set(addItem, (currentMap.get(addItem) || 0) + 1);

        // 조건 만족하는지 검사
        if (isValid(wantMap, currentMap)) answer++;
    }

    return answer;
}

// 두 개의 Map이 동일한지 비교하는 함수
function isValid(wantMap, currentMap) {
    for (let [key, value] of wantMap) {
        if (currentMap.get(key) !== value) return false;
    }
    return true;
}



console.log(solution(["banana", "apple", "rice", "pork", "pot"],[3, 2, 2, 2, 1],["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]))//	3
console.log(solution(["apple"],[10],["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]))//	0
console.log(solution(["apple", "banana"],[5,5],["apple", "banana", "apple", "banana", "apple", "banana", "apple", "banana", "apple", "banana"]))//	1
console.log(solution(["apple", "banana", "rice"],[3,5,2],["banana", "apple", "banana", "apple", "banana", "rice", "apple", "banana", "rice", "apple", "banana", "banana", "banana", "banana"]))