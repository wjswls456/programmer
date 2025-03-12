function getMultiset(str){
    let multiset = new Map()
    str = str.toLowerCase();

    for (let i = 0; i < str.length - 1; i++) {
        let pair = str[i] + str[i + 1];
        if (/^[a-z]{2}$/.test(pair)) { // 영문자 2글자로 이루어진 경우만 추가
            multiset.set(pair, (multiset.get(pair) || 0) + 1);
        }
    }
    return multiset;

}



function solution(str1, str2) {

    let multiset1 = getMultiset(str1);
    let multiset2 = getMultiset(str2);

    let intersection = 0, union = 0;
    let allKeys = new Set([...multiset1.keys(), ...multiset2.keys()]);

    allKeys.forEach(Element=>{
        let count1 = multiset1.get(key) || 0;
        let count2 = multiset2.get(key) || 0;

        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
        
    })

    // 일단 중복없는 합집합 객체로 반복문 돌려서 각각  str1, str2 탐색하면서 
    // 최대, 최소 값을 찾는다

    // str1,str2 을 데이터 넣는 함수가 필요함
    
    
    let jaccard = union === 0 ? 1 : intersection / union;
    return Math.floor(jaccard * 65536);
}