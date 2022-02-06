const isOddOrEven = require('./index');
const { expect } = require('chai');

describe('isOddOrEven', () => {
   it('works with even', () => {
      expect(isOddOrEven('le')).to.contain('even')
   });
   it('works with odd', () => {
      expect(isOddOrEven('l')).to.contain('odd')
   });
   it('works with invalid input', () => {
      expect(isOddOrEven(1)).to.be.undefined;
      expect(isOddOrEven([])).to.be.undefined;
      expect(isOddOrEven({})).to.be.undefined;
      expect(isOddOrEven(null)).to.be.undefined;
   });
})