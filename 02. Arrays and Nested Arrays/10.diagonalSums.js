function solve(arr) {
 let leftDiag = 0;
 let rightDiag = 0;

 for (let i = 0; i < arr.length; i++) {
  leftDiag += arr[i][i];
  rightDiag += arr[i][arr.length - i - 1];
 }

 console.log(`${leftDiag} ${rightDiag}`);

}
solve([
 [20, 40],
 [10, 60]
]);
solve([
 [3, 5, 17],
 [-1, 7, 14],
 [1, -8, 89]]
);