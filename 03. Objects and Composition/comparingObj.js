const fruit = { name: 'apple' };
const fruitbear = { name: 'apple' };
fruit == fruitbear;  // false
fruit === fruitbear; // false

//     ===
//--- ===== ----
//     ===

const fruit = { name: 'apple' };
const fruitbear = fruit;
// Assign a copy of the fruit reference to fruitbear
fruit == fruitbear;  // true
fruit === fruitbear; // true
