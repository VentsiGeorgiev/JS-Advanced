function solve(arr) {
 let maxNum = Number.MIN_SAFE_INTEGER;

 for (const line of arr) {
  for (const num of line) {

   if (maxNum < num) {
    maxNum = num;
   }
   // maxNum < num ? maxNum = num : maxNum = 0;
  }
 }
 return maxNum;

}
solve([[20, 50, 10],
[8, 33, 145]])