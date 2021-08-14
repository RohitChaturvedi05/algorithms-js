function someRecursive(source, cb) {
  // add whatever parameters you deem necessary - good luck!
  function valueChecker(arr) {
    if (arr.length === 0) {
      return false
    }
    return (cb(arr[0]) || valueChecker(arr.slice(1)))
  }
  return valueChecker(source)
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)) // false