function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    if (!str) {
        return ''
    }
    return reverse(str.slice(1)) + str[0]
}

console.log(
    reverse('awesome') // 'emosewa'
)
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'