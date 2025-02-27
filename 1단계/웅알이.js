
function solution(babbling) {
    const regex = /^(aya|ye|woo|ma)+$/; // 허용된 단어 조합 검사
    const repeatCheck = /(aya|ye|woo|ma)\1/; // 연속된 발음 검사
    
    return babbling.filter(word => regex.test(word) && !repeatCheck.test(word)).length;
}


// 첫 번째 정규 표현식: /^(aya|ye|woo|ma)+$/

// ^: 문자열의 시작을 의미합니다.
// (aya|ye|woo|ma): aya, ye, woo, ma 중 하나의 단어가 나타날 수 있음을 의미합니다. 여기서 |는 '또는'을 나타냅니다.
// +: 앞의 그룹이 하나 이상 반복될 수 있음을 나타냅니다. 즉, aya, ye, woo, ma가 하나 이상 연속해서 나올 수 있습니다.
// $: 문자열의 끝을 의미합니다.
// 따라서 이 정규 표현식은 입력 문자열이 aya, ye, woo, ma로만 구성되어 있으며, 이들 단어가 하나 이상 연속해서 나타나는 경우에만 매칭됩니다.

// 두 번째 정규 표현식: /(aya|ye|woo|ma)\1/

// (aya|ye|woo|ma): 첫 번째와 같은 방식으로 aya, ye, woo, ma 중 하나의 단어를 선택합니다.
// \1: 첫 번째 그룹에서 매칭된 내용을 다시 참조합니다. 즉, 첫 번째 그룹에서 매칭된 단어가 바로 뒤에 또 한 번 나타나는 경우를 의미합니다.
// 이 정규 표현식은 aya, ye, woo, ma 중 하나의 단어가 연속해서 두 번 나타나는 경우에 매칭됩니다. 예를 들어 ayaaya, yeeyee 같은 경우입니다.

solution(["aya", "yee", "u", "maa"])//1