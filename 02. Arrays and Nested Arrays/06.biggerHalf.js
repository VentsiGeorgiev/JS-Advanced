function solve(arr) {

 arr.sort((a, b) => a - b)
 start = arr.length / 2;
 return arr.splice(start, arr.length)

}
console.log(solve([4, 7, 2, 5]));
