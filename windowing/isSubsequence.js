function isSubsequence(seq, source) {
    // good luck. Add any arguments you deem necessary.

    let firstPointer = 0;
    let secondPointer = 0;

    let matchedChar = 0

    while (firstPointer < seq.length || (matchedChar !== seq.length)) {
        // if Matched increase the count and move first to next char

        if (seq[firstPointer] === source[secondPointer]) {
            matchedChar++;
            firstPointer++;
        }
       
        if (secondPointer >= source.length-1) {
            // if char not found in sourceß
            break;
        }
        secondPointer++;
    }
    return matchedChar === seq.length
}

// console.log('isSubsequence result => ', isSubsequence('sing', 'string'))
console.log('isSubsequence result => ', isSubsequence('abc', 'abracadabra'))
console.log('isSubsequence result => ', isSubsequence('abc', 'acb'))