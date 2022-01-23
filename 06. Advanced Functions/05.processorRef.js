function solve() {
  let str = '';

  return {
    append: (v) => (str += v),
    removeStart: (x) => (str = str.slice(x)),
    removeEnd: (x) => (str = str.slice(0, -x)),
    print: () => console.log(str),
  };
}

// ===== //
let firstZeroTest = solve();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
