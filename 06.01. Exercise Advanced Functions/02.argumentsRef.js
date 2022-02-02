function solve() {
  let arr = [];
  let count = {};

  [...arguments].forEach((a) => {
    let type = typeof a;
    console.log(`${type}: ${a}`);
    arr.push({ [type]: a });
    if (!count.hasOwnProperty(type)) {
      count[type] = 0;
    }
    count[type]++;
  });
  Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .forEach((e) => console.log(`${e[0]} = ${e[1]}`));

  //   let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  //   for (const [key, value] of sorted) {
  //     console.log(`${key} = ${value}`);
  //   }
}
solve(3, 'cat', 42, function () {
  console.log('Hello world!');
});
