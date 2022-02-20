const testNumbers = require('./testNumbers');
const { expect } = require('chai');

describe('testNumbers', () => {

   describe('sumNumbers', () => {

      it('check if parameters are numbers with postive numbers', () => {
         expect(testNumbers.sumNumbers(1, 1)).to.be.equal('2.00');
         expect(testNumbers.sumNumbers(1.5, 1.5)).to.be.equal('3.00');
         expect(testNumbers.sumNumbers(1.555, 1.333)).to.be.equal('2.89');
      });
      it('check if parameters are numbers with negative numbers', () => {
         expect(testNumbers.sumNumbers(-1, -1)).to.be.equal('-2.00');
         expect(testNumbers.sumNumbers(-1.5, -1.5)).to.be.equal('-3.00');
         expect(testNumbers.sumNumbers(-1.555, -1.333)).to.be.equal('-2.89');
      });
      it('check if parameters are numbers with postive and negative', () => {
         expect(testNumbers.sumNumbers(-1, 1)).to.be.equal('0.00');
         expect(testNumbers.sumNumbers(-1.5, 1.5)).to.be.equal('0.00');
         expect(testNumbers.sumNumbers(-1.555, 1.333)).to.be.equal('-0.22');
      });

      it('check the parameteres if they are numbers', () => {
         expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
         expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
         expect(testNumbers.sumNumbers('1', '1')).to.be.undefined;
      });

   });

   describe('numberChecker', () => {

      it('correct input - odd', () => {
         expect(testNumbers.numberChecker('0')).to.be.equal('The number is even!');
      });
      it('correct input - even', () => {
         expect(testNumbers.numberChecker('1')).to.be.equal('The number is odd!');
      });
      it('invalid input', () => {
         expect(() => testNumbers.numberChecker('a')).to.throw();
         expect(() => testNumbers.numberChecker(undefined)).to.throw();
         expect(() => testNumbers.numberChecker({})).to.throw();

      });
   });

   describe('averageSumArray', () => {

      it('correct input - odd', () => {
         expect(testNumbers.averageSumArray([1, 2, 3])).to.be.equal(2);
         expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.be.equal(2.5);
         expect(testNumbers.averageSumArray([-1, -2, -3])).to.be.equal(-2);

      });
   });

})

// // Expect to throw ERROR

// it('EXPECT ERROR', () => {
//    expect(() => library.arrangeTheBooks(undefined)).to.throw();
// });

// it('CHECK IF USING to.Fixed(2)', () => {
//    expect(testNumbers.sumNumbers(1.555, 1.333)).to.be.equal('2.89');
// });
