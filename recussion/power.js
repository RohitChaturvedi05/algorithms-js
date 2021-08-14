function power(num, pw) {
    if (pw === 0) {
        return 1
    }
    return num * power(num, pw - 1)
}

console.log(pow(2, 0))
console.log(pow(2, 1))
console.log(pow(2, 2))
console.log(pow(2, 3))
console.log(pow(2, 4))