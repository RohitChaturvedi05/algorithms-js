function insertionSort(source) {
    let arr = source.slice()
    let curr = 1

    while (curr < arr.length) {
        const currVal = arr[curr]
        let prev = curr - 1

        while (prev >= 0) {
            const prevVal = arr[prev]
            if (prevVal > currVal) {
                arr[prev] = currVal
                arr[prev + 1] = prevVal
            } else {
                break;
            }
            prev--;
        }
        curr++;
    }

    return arr
}


arr = [5, 2, 93, 6, 88, 1, 24, 66, 2, -10]

console.log(insertionSort(arr))