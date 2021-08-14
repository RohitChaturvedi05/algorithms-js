// function stringifyNumbers(obj) {
//     let result = {}
//     for (const key in obj) {
//         if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             result[key] = stringifyNumbers(obj[key])
//         } else if (typeof obj[key] === 'number') {
//             result[key] = String(obj[key])
//         } else {
//             result[key] = obj[key]
//         }
//     }
//     return result
// }


// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }
// console.log(stringifyNumbers(obj))


const obj = {
    stuff: "foo",
    stuff2: "foo2",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}



function collectStrings(obj) {
    let result = []

    for (const key in obj) {
        const val = obj[key]
        if (typeof val === 'string') {
            result.push(val)
        } else if (typeof val === 'object') {
            const arr = collectStrings(val)
            // result = [...result, ...arr]

            result = result.concat(arr)
            // console.log(result, arr)
        }

    }
    return result
}


function collectStrings2(obj, result = []) {

    for (const key in obj) {
        const val = obj[key]
        if (typeof val === 'string') {
            result.push(val)
        }
        if (typeof val === 'object' && !Array.isArray(val)) {
            collectStrings2(val, result)
        }

    }
    return result
}


console.log(collectStrings(obj)) // ["foo", "bar", "baz"])