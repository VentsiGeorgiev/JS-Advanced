function solve(arr) {
 let result = [];
 // let lastNum = Number.MIN_SAFE_INTEGER;
 let lastNum = 0;

 for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= lastNum) {
   result.push(arr[i]);
   lastNum = arr[i];
  }
 }
 return result;
}
console.log(solve([20,
 3,
 2,
 15,
 6,
 1]

));