function boubleSort(arr) {

    let start = 0
    let noSwaps = false
    while (start < arr.length) {
        let next = 0
        noSwaps = true
        while (next < arr.length) {
            if (arr[next] > arr[next + 1]) {
                [arr[next], arr[next + 1]] = [arr[next + 1], arr[next]]
                noSwaps = false
            }
            next++
        }
        if (noSwaps) break;
        start++
    }
    return arr
}

arr = [1, 2, 93, 78, 88, 97]

console.log(boubleSort(arr))