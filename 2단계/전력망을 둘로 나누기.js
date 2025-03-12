function solution(n, wires) {
    let minDiff = Infinity;
    
    // 그래프 생성 (인접 리스트)
    const buildGraph = (n, wires) => {
        let graph = Array.from({ length: n + 1 }, () => []);
        for (let [v1, v2] of wires) {
            graph[v1].push(v2);
            graph[v2].push(v1);
        }
        return graph;
    };

    // BFS를 사용하여 연결된 송전탑 개수 찾기
    const countNodes = (graph, start, blocked) => {
        let queue = [start];
        let visited = new Set();
        visited.add(start);
        let count = 1;

        while (queue.length > 0) {
            let node = queue.shift();
            for (let next of graph[node]) {
                if (!visited.has(next) && !(node === blocked[0] && next === blocked[1]) && !(node === blocked[1] && next === blocked[0])) {
                    visited.add(next);
                    queue.push(next);
                    count++;
                }
            }
        }
        return count;
    };

    // 모든 전선을 하나씩 끊어보며 최소 차이 탐색
    for (let [v1, v2] of wires) {
        let graph = buildGraph(n, wires);
        let count1 = countNodes(graph, v1, [v1, v2]);
        let count2 = n - count1;
        let diff = Math.abs(count1 - count2);
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}

solution(9,[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])