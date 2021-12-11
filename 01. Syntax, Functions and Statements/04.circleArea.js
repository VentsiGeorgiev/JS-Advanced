// function solve(input) {

//  if (isNaN(input)) {
//   console.log('We can not calculate the circle area, because we receive a ${typeof(input)}.');
//  } else {
//   result = Math.pow(input, 2) * Math.PI;
//   console.log(result.toFixed(2));
//  }

// }
// solve(5);
// solve('name');

function solve(input) {
 let result;

 let inputType = typeof (input);

 if (inputType === 'number') {
  result = Math.pow(input, 2) * Math.PI;
  console.log(result.toFixed(2));
 } else {
  console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
 }


}
solve(5)
solve('name')