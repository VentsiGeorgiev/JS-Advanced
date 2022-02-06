const { sum } = require('./myModule');

describe('Demo Test', () => {
  it('works with 5 and 3', () => {
    if (sum(5, 3) != 8) {
      throw Error('Did not work as expected');
    }
  });
});
