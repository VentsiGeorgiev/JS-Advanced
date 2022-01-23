function solution() {
  let state = '';

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };

  function append(str) {
    state += str;
  }

  function removeStart(n) {
    state = state.slice(n);
  }

  function removeEnd(n) {
    state = state.slice(0, -n);
  }

  function print() {
    console.log(state);
  }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
