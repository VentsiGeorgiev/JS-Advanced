const numberOperations = require('./index');
const { expect } = require('chai');

describe('numberOperations', () => {

   describe('powNumber', () => {

      it('works with valid input and dicount', () => {
         expect(numberOperations.powNumber(5)).to.be.equal(25);
         expect(numberOperations.powNumber(1.5)).to.be.equal(2.25);
         expect(numberOperations.powNumber(-1.5)).to.be.equal(2.25);
      });
   });

   describe('numberChecker', () => {
      it('invalid input', () => {
         expect(() => numberOperations.numberChecker('a')).to.throw();
         expect(() => numberOperations.numberChecker(undefined)).to.throw();
         expect(() => numberOperations.numberChecker({})).to.throw();
      });

      it('valid input < 100', () => {
         expect(numberOperations.numberChecker('99')).to.be.equal('The number is lower than 100!');
         expect(numberOperations.numberChecker('-1')).to.be.equal('The number is lower than 100!');
      });
      it('valid input >= 100', () => {
         expect(numberOperations.numberChecker('100')).to.be.equal('The number is greater or equal to 100!');
         expect(numberOperations.numberChecker('101')).to.be.equal('The number is greater or equal to 100!');
      });
   });

   describe('sumArrays', () => {
      it('works with valid input', () => {
         expect(numberOperations.sumArrays([1, 2, 3], [4, 5, 6])).to.be.deep.equal([5, 7, 9]);
         expect(numberOperations.sumArrays([1, 2, 3], [4, 5])).to.be.deep.equal([5, 7, 3]);
         expect(numberOperations.sumArrays([-1, -2, -3], [-4, -5, -6])).to.be.deep.equal([-5, -7, -9]);
      });
   });

})
