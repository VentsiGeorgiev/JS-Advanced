// const { expect } = require('chai');
// const { sum } = require('./myModule');

// describe('Demo test', () => {
//   it('works with 5 and 3', () => {
//     expect(sum(5, 3)).to.equal(8);
//   });
// });

const { expect } = require('chai');
const isSymmetric = require('./symmerty');

describe('Symetry Checker', () => {
  it('return true for symmetric array', () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });
  it('return false for non-symmetric array', () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });
  it('return false for type-different symmetric array', () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });
  it('return false for non-array', () => {
    expect(isSymmetric(5)).to.be.false;
  });
  it('return true for symmetric array', () => {
    expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
  });
  it('return false for non-symmetric array', () => {
    expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
  });
  it('return false for string parameter', () => {
    expect(isSymmetric(['abc'])).to.be.true;
  });
});
