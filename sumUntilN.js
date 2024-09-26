// 1 + 2 + 3 ... return 6
function sumUntil(n) {

    let sum = 1

    for (let i = 2; i <= n; i++) {
        sum += i
    }

    return sum
}

// Test cases:
console.log(sumUntil(3)) // 6
console.log(sumUntil(10))// 55
console.log(sumUntil(7)) // 28
console.log(sumUntil(1)) // 1