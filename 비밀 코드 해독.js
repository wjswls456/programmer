function solution(n, q, ans) {
    function generateCombinations(arr, k) {
        const result = []
        function backtrack(start,current){
            if(current.length == k){
                result.push([...current]) 
                return
            }
            for(let i =start;i<k;i++){
                current.push(arr[i])
                backtrack(i+1,current);
                current.pop()
            }
        }
        backtrack(0,[])
        return result
    }

    function countCommonElements(candidate, query) {

        const candidateSet = new Set(candidate)
        let count =0;
        for(const num of query){
            if(candidateSet.has(num)) count++
        }
        return count
    }

    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    const candidates = generateCombinations(numbers, 5);
    let validCount = 0;

    for (const candidate of candidates) {
        let isValid = true;
        for (let i = 0; i < q.length; i++) {
            const query = q[i];
            const expected = ans[i];
            const actual = countCommonElements(candidate, query);
            if (actual !== expected) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            validCount++;
        }
    }

    return validCount;
}

solution(10,[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [3, 7, 8, 9, 10], [2, 5, 7, 9, 10], [3, 4, 5, 6, 7]],[2, 3, 4, 3, 3])

