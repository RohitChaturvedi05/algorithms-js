function getDigit(num, i) {
    return Math.floor(
        Math.abs(num) / Math.pow(10, i)
    ) % 10
}

function getBuckets(num = 10) {
    let buckets = {}
    for (let index = 0; index < num; index++) {
        buckets[index] = []
    }
    return buckets
}

function redixSort(arr, digitPos = 0) {
    let buckets = getBuckets()
    let i = 0

    while (i < arr.length) {
        const bucketNo = getDigit(arr[i], digitPos)
        buckets[bucketNo].push(arr[i])
        i++
    }

    arr = [].concat(...Object.values(buckets))

    digitPos++
    return buckets[0].length === arr.length ?
        arr :
        redixSort(arr, digitPos)
}
// ========================================================
const generateUnsorted = require('./generate-unsorted-arr')
var data = generateUnsorted(1000)
console.log('Input=', data)
console.log('Result=', redixSort(data))
// ========================================================