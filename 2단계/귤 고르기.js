function solution(k, tangerine) {
    let countMap = new Map();

    for (let size of tangerine) {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    let sortedCounts = [...countMap.values()].sort((a, b) => b - a);

    let total = 0, types = 0;
    for (let count of sortedCounts) {
        total += count;
        types++;
        if (total >= k) break; // k개 이상이 되면 종료
    }

    return types;
}
