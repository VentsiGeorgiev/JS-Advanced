const lookupChar = require('./index');
const { expect } = require('chai');


describe('Testing lookupChar', () => {

   it('works with invalid numbers', () => {
      expect(lookupChar(1, 1)).to.be.undefined;
      expect(lookupChar(1, '1')).to.be.undefined;
      expect(lookupChar('1', '1')).to.be.undefined;
      expect(lookupChar('1')).to.be.undefined;
      expect(lookupChar('11', 2.1)).to.be.undefined;

   });
   it('wrong index', () => {
      expect(lookupChar('11', 3)).to.equal('Incorrect index')
      expect(lookupChar('11', -1)).to.equal('Incorrect index')
      expect(lookupChar('11', -1)).to.equal('Incorrect index')
   });
   it('works with correct input', () => {
      expect(lookupChar('JS', 0)).to.equal('J');
      expect(lookupChar('JS', 1)).to.equal('S');
      expect(lookupChar('JS1', 2)).to.equal('1');
   });

});