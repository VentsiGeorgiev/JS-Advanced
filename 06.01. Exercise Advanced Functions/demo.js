solution = {
  add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
  multiply: (numbers, multiplier) => numbers.map((el) => el * multiplier),
  length: ([x, y]) => Math.sqrt(x * x + y * y),
  dot: ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2,
  cross: ([x1, y1], [x2, y2]) => x1 * y2 - y1 * x2,
};
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));
