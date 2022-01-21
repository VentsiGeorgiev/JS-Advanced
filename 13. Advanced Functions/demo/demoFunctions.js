// function increment(a) {
//   return a + 1;
// }

// console.log([1, 2, 3].map(increment));

/* 
  ----==== Pure function ====----
 */

let counter = 0;

function increment(a) {
  counter += a;
  console.log(counter);
}

function pureIncrement(a) {
  console.log(a + 1);
}

increment(2);
increment(2);
increment(2);
increment(2);

pureIncrement(2);
pureIncrement(2);
pureIncrement(2);
pureIncrement(2);
