// 처음에 풀었을때 드는 생각
function solution(survey, choices) {
    let characterObj ={"R":0,"T":0,"C":0,"F":0,"J":0,"M":0,"A":0,"N":0}

    //rt,cf,jm,an

    for(let i=0;i<choices.length;i++){
        let agreeStatus = survey[i][1]
        let disagreeStatus = survey[i][0]

        let agreeStatusCnt = 0
        let disagreeStatusCnt = 0

        if(choices[i] === 1){
            disagreeStatusCnt = disagreeStatusCnt + 3
        } else if(choices[i] === 2){
            disagreeStatusCnt = disagreeStatusCnt + 2
        }else if(choices[i] === 3){
            disagreeStatusCnt = disagreeStatusCnt + 1
        }else if(choices[i] === 4){
            
        }else if(choices[i] === 5){
            agreeStatusCnt = agreeStatusCnt + 1
        }else if(choices[i] === 6){
            agreeStatusCnt = agreeStatusCnt + 2
        }else if(choices[i] === 7){
            agreeStatusCnt = agreeStatusCnt + 3
        }

        characterObj[agreeStatus] += agreeStatusCnt
        characterObj[disagreeStatus] += disagreeStatusCnt
    }

    const result = [
        characterObj['R'] >= characterObj['T'] ? 'R' : 'T',
        characterObj['C'] >= characterObj['F'] ? 'C' : 'F',
        characterObj['J'] >= characterObj['M'] ? 'J' : 'M',
        characterObj['A'] >= characterObj['N'] ? 'A' : 'N'
    ];

    return result.join('');
}

// solution(["AN", "CF", "MJ", "RT", "NA"],[5, 3, 2, 7,5]) // "TCMA"
solution(["TR", "RT", "TR"],[7, 1, 3]) //"RCJA" ,R 7 점
	


// survey[i]의 첫 번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.

// survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.