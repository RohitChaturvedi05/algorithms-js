function selectionSort(arr) {

    let start = 0
    let currMin = 0
    let prevMin = 0

    while (start < arr.length) {
        let selector = start

        while (selector < arr.length) {
            if (arr[currMin] > arr[selector]) {
                currMin = selector
            }
            selector++
        }
        if (prevMin !== currMin) {
            [arr[start], arr[currMin]] = [arr[currMin], arr[start]];
            prevMin = currMin
        }
        start++
    }
    return arr
}

arr = [5, 2, 93, 78, 88, 97]

console.log(selectionSort(arr))