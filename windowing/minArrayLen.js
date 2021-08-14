function minSubArrayLen(source, target) {
    // good luck. Add any arguments you deem necessary.

    let windowSum = 0;
    let start = 0;
    let next = 0;
    let minLen = Infinity

    while (start < source.length) {

        if (windowSum < target && next < source.length) {
            windowSum += source[next]
            next++;
        } else if (windowSum >= target) {
            minLen = Math.min(minLen, next - start)
            windowSum -= source[start]
            start++
        } else {
            break
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

// console.log('isSubsequence result => ', isSubsequence('sing', 'string'))
console.log('minSubArrayLen result => ', minSubArrayLen([1, 3, 5, 2, 6, 62], 62))