function solve(arr) {
 let result = [];

 for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 'add') {
   result.push(i + 1);
  } else {
   result.pop();
  }
 }
 return result.length > 0 ? result.join('\n') : 'Empty';
}

console.log(solve(['add',
 'add',
 'add',
 'add']
));
console.log(solve(['add',
 'add',
 'remove',
 'add',
 'add']
));
console.log(solve(['remove',
 'remove',
 'remove']
));