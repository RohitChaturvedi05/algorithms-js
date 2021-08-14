function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return []
  }
  if (Array.isArray(arr[0])) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)))
  }
  return [arr[0]].concat(flatten(arr.slice(1)))
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4],
  [
    [5]
  ]
]])) // [1, 2, 3, 4, 5]
console.log(flatten([
  [1],
  [2],
  [3]
])) // [1,2,3]
console.log(flatten([
  [
    [
      [1],
      [
        [
          [2]
        ]
      ],
      [
        [
          [
            [
              [
                [
                  [3]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
])) // [1,2,3]