function solve(arr) {
    let result = []
    arr.filter((x, i) => {
        if (i % 2 == 0) {
            result.push(x)
        }
    })
    return result.join(' ')
}
console.log(solve(["20", "30", "40", "50", "60"]));

// function solve(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i += 2) {
//         result.push(arr[i])
//     }
//     return result.join(' ')
// }
// console.log(solve(["20", "30", "40", "50", "60"]));

