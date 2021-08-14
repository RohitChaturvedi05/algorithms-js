function maxSubarraySum(source, count) {
    // add whatever parameters you deem necessary - good luck!

    let indx = 0;
    let windowSum = 0;
    let maxSum = 0
    if (count > source.length) {
        return null
    }
    while (indx < count) {
        windowSum += source[indx]
        indx++
    }

    for (let i = count; i < source.length; i++) {
        const nextItem = source[i]
        const firstItem = source[i - count]
        // const withCurrItem = firstItem > 0 ? sum + nextItem - firstItem : sum + nextItem + firstItem
        windowSum = (windowSum - firstItem) + nextItem
        maxSum = Math.max(windowSum, maxSum)
    }

    return maxSum
}


console.log('maxSubarraySum result expected 900 => ', maxSubarraySum([100, 200, 300, 400, 500], 2))
console.log('maxSubarraySum result expected 5 => ', maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
console.log('maxSubarraySum result expected 5 => ', maxSubarraySum([-3, -2, 7, -4, 1, -4, -2, 1], 2))