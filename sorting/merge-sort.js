function merge(arr1, arr2) {
    let n = 0
    let m = 0
    const sortedArr = []
    while (n < arr1.length && m < arr2.length) {
        if (arr1[n] <= arr2[m]) {
            sortedArr.push(arr1[n])
            n++
        } else {
            sortedArr.push(arr2[m])
            m++
        }
    }
    while (n < arr1.length) {
        sortedArr.push(arr1[n])
        n++
    }
    while (m < arr2.length) {
        sortedArr.push(arr2[m])
        m++
    }

    return sortedArr
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid, arr.length))
    return merge(left, right)
}

const generateUnsorted = require('./generate-unsorted-arr')
const data = generateUnsorted(100)

console.log(mergeSort(data))

//console.log(merge(arr1, arr2))