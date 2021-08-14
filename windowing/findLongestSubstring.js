function findLongestSubstring(str) {
    // add whatever parameters you deem necessary - good luck!

    let map = {};
    let longestCount = -Infinity;
    let start = 0;
    let next = 0;

    while (start < str.length) {
        const char = str[next]
        if (!map.hasOwnProperty(char) && next < str.length) {
            map[char] = next
            next++;
        } else if (map.hasOwnProperty(char)) {

            longestCount = Math.max(longestCount, (next - start))
            start = map[char] + 1
            map = {}
            next = start

        } else {
            longestCount = Math.max(longestCount, (next - start))
            break
        }
    }
    const result = Math.max(longestCount, 0)
    console.log(`Result for ${str}=> ${result}`)
    return result
}


//findLongestSubstring('rithmschool')
//findLongestSubstring('thisisawesome')
//findLongestSubstring('bbbbbbbbbbbbbb')
findLongestSubstring('longestsubstring')
//findLongestSubstring('thisisshowwedoit')