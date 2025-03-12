function solution(n) {
    // 1. 삼각형 형태의 2차원 배열 만들기
    let triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    
    // 2. 방향 벡터 정의 (아래, 오른쪽, 위쪽 대각선)
    let dr = [1, 0, -1];  // 행 이동 방향
    let dc = [0, 1, -1];  // 열 이동 방향
    
    let num = 1, r = 0, c = 0, dir = 0;  // 시작 위치 및 방향
    
    // 3. 달팽이 채우기
    while (num <= (n * (n + 1)) / 2) {
        triangle[r][c] = num++;
        
        // 다음 위치 계산
        let nr = r + dr[dir];
        let nc = c + dc[dir];

        // 범위를 벗어나거나 이미 숫자가 차 있는 경우 방향 전환
        if (nr >= n || nc > nr || triangle[nr][nc] !== 0) {
            dir = (dir + 1) % 3;
            nr = r + dr[dir];
            nc = c + dc[dir];
        }
        
        r = nr;
        c = nc;
    }
    
    // 4. 2차원 배열을 1차원 배열로 변환
    return triangle.flat();
}
