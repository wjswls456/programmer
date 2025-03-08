function solution(phone_book) {
    let phoneSet = new Set(phone_book);

    for (let phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            if (phoneSet.has(phone.slice(0, i))) {
                return false; // 접두어 발견!
            }
        }
    }
    return true;
}
