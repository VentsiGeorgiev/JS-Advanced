function solve(inputArr) {
  let juices = new Map();
  let result = new Map();
  inputArr.forEach((e) => {
    let [juiceName, juiceQuantity] = e.split(' => ');
    if (!juices.has(juiceName)) {
      juices.set(juiceName, Number(juiceQuantity));
    } else {
      juices.set(juiceName, juices.get(juiceName) + Number(juiceQuantity));
    }
    if (juices.get(juiceName) >= 1000 && result.get(juiceName) == undefined) {
      result.set(juiceName, 0);
    }
    while (juices.get(juiceName) >= 1000) {
      result.set(juiceName, result.get(juiceName) + 1);
      juices.set(juiceName, juices.get(juiceName) - 1000);
    }
  });

  for (const [juice, bottles] of result) {
    console.log(`${juice} => ${bottles}`);
  }
}
solve([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789',
]);
