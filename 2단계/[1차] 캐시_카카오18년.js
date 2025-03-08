function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5; // 캐시 크기가 0이면 모두 miss

    let cache = new Map()
    var answer = 0;

    for(let city of cities) {
        city = city.toLowerCase()
        if(cache.has){
            answer++
            cache.delete(city)
        } else {
            answer +=5
            if(cacheSize>= cache.size()){
                let oldValue = cache.keys().next().value
                cache.delete(oldValue)
            }
            
        }
        cache.set(city,true)
    }
    return answer;
}