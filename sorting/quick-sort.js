const generateUnsorted = require('./generate-unsorted-arr')
var data = generateUnsorted(100)

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function pivotPartition(arr, left, right) {

    const pivot = left
    let i = left + 1
    const pivotVal = arr[pivot]
    let swapConter = left

    for (let i = left + 1; i <= right; i++) {
        if (pivotVal > arr[i]) {
            swapConter++;
            swap(arr, swapConter, i)
        }
    }
    swap(arr, pivot, swapConter)
    return swapConter
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivot = pivotPartition(arr, left, right)
        quickSort(arr, left, pivot - 1)
        quickSort(arr, pivot + 1, right)
    }
    return arr
}


// data = [401, 766, 360, 380, 450, 522, 213, 260, 458, 720]

const result = quickSort(data, 0, data.length - 1)

console.log('Result=', result)
// console.log('Result=', data)

// [401, 766, 360, 380, 947, 522, 213, 260, 458, 720]
// [401, 766, 360, 720, 260, 522, 380, 947, 213, 458]

// [213, 260, 360, 380, 401, 458, 522, 720, 766, 947]