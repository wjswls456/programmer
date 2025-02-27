function solution(schedules, timelogs, startday) {
    let answer =0;

    function convertTime(time){
        const hour = Math.floor(time/100)
        const min = time%100

        return hour*60+min
    }

    for(let i=0;i<schedules.length;i++){

        const schedule = convertTime(schedules[i])
        const allowedTime = schedule+10

        let logs = timelogs[i]
        let isStatus = true
        

        for(let j=0; j < 7 ;j++){
            
            let currentDay = ((startday+j-1)%7)+1

            if(currentDay == 6 || currentDay ==7) continue;
            const logMinutes = convertTime(logs[j]);
            if(allowedTime < logMinutes){
                isStatus= false;
                break;
            }

        }
        if(isStatus) answer++
    }
    return answer
}



solution([700, 800, 1100],[[710, 2359, 1050, 700, 650, 631, 659], [800, 801, 805, 800, 759, 810, 809], [1105, 1001, 1002, 600, 1059, 1001, 1100]],5)
// solution([730, 855, 700, 720],[[710, 700, 650, 735, 700, 931, 912], [908, 901, 805, 815, 800, 831, 835], [705, 701, 702, 705, 710, 710, 711], [707, 731, 859, 913, 934, 931, 905]],1)
solution([655, 800],[[700], [808]],1) // 1