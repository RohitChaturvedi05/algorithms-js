function nestedEvenSum(obj) {
    // add whatever parameters you deem necessary - good luck!
    if (Object.keys(obj).length === 0) {
        return 0
    }

    let sum = 0
    for (const key in obj) {
        const val = obj[key]
        if (typeof val === 'object') {
            sum += nestedEvenSum(val)
        }
        if (typeof val === 'number' && val % 2 === 0) {
            sum += val
        }
    }
    return sum
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {
        b: 2,
        bb: {
            b: 3,
            bb: {
                b: 2
            }
        }
    },
    c: {
        c: {
            c: 2
        },
        cc: 'ball',
        ccc: 5
    },
    d: 1,
    e: {
        e: {
            e: 2
        },
        ee: 'car'
    }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2));
// nestedEvenSum(obj2); // 10