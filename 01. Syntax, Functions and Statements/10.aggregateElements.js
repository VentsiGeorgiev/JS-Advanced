function solve(input) {
 let sum = 0;
 let inverseValues = 0;
 let concat = '';
 for (let i = 0; i < input.length; i++) {
  sum += input[i];
  let currentValue = 1 / input[i];
  inverseValues += currentValue;
  concat += input[i]
 }
 console.log(sum);
 console.log(inverseValues);
 console.log(concat);
}
solve([2, 4, 8, 16])