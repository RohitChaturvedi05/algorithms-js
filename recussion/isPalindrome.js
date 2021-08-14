// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!
    function reverse(str) {
        if (!str) {
            return ''
        }
        return reverse(str.slice(1)) + str[0]
    }
    return str === reverse(str)
}

console.log(
    'awesome', isPalindrome('awesome'), '\n', // false
    'foobar', isPalindrome('foobar'), '\n', // false
    'tacocat', isPalindrome('tacocat'), '\n', // true
    'amanaplanacanalpanama', isPalindrome('amanaplanacanalpanama '), '\n', // true
    'amanaplanacanalpandemonium', isPalindrome('amanaplanacanalpandemonium'), '\n', // false
)