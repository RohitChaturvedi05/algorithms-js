function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        if (arr[left] === target) return left;
        if (arr[right] === target) return right;

        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];
        if (midValue === target) return mid;

        if (midValue > target) {
            right = mid
            left++
        }
        if (midValue < target) {
            left = mid
            right--
        }
        console.log(left, right, mid)
    }
    return -1
}


function binarySearchValueExit(arr, target) {

    if (arr.length === 0) return false

    let left = 0;
    let right = arr.length - 1;
    const mid = Math.floor((left + right) / 2);

    if (arr[left] === target) return true;
    if (arr[right] === target) return true;

    const midValue = arr[mid];
    if (midValue === target) return true;

    if (midValue > target) {
        return binarySearchValueExit(arr.slice(left, mid), target)
    }
    if (midValue < target) {
        return binarySearchValueExit(arr.slice(mid, right), target)
    }
}


const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

console.log(
    // binarySearch(arr, 30),
    //binarySearch(arr, 80),
    binarySearchValueExit(arr, 110)
)