// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 0) {
        return null
    }
    if (arr.length === 1) {
        return arr[0]
    }
    const [first, ...rest] = arr
    return first * productOfArray(rest)
}

console.log(productOfArray([1, 2, 3])) //6
console.log(productOfArray([1, 2, 3, 10])) //6

const result = [1, 2, 3].slice(1)
console.log(result)