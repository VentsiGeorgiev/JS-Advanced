function solution(n) {
  let num = n;

  return function add(n) {
    return num + n;
  };
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
