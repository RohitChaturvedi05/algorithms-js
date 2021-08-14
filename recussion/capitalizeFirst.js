function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) {
        return []
    }

    let first = arr[0]
    return [
        (first[0].toUpperCase() + first.slice(1))
    ].concat(
        capitalizeFirst(arr.slice(1))
    )
}


console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car','Taco','Banana']