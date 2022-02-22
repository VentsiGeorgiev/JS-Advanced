const dealership = require('./index');
const { expect } = require('chai');

describe('library', () => {

   describe('newCarCost', () => {

      it('works with discount', () => {
         expect(dealership.newCarCost('Audi A4 B8', 15000.50)).to.be.equal(0.50);
         expect(dealership.newCarCost('Audi TT 8J', 13000)).to.be.equal(-1000);
      });
      it('works without discount', () => {
         expect(dealership.newCarCost('Lada 500', 1500000)).to.be.equal(1500000);
         expect(dealership.newCarCost('', 1)).to.be.equal(1);
      });

   });

   describe('carEquipment', () => {

      it('works with valid extra input', () => {
         let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
         let addedExtras = [1, 3];
         expect(dealership.carEquipment(extras, addedExtras)).to.be.deep.equal(['sliding roof', 'navigation']);
      });

   });

   describe('euroCategory', () => {

      it('works with invalid input', () => {
         expect(dealership.euroCategory(-1)).to.equal('Your euro category is low, so there is no discount from the final price!');
         expect(dealership.euroCategory(0)).to.equal('Your euro category is low, so there is no discount from the final price!');
      })
      it('works with valid input', () => {
         expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
         expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
      })

      // it('works with valid extra input', () => {
      //    expect(dealership.euroCategory(4)).to.contain('We have added 5% discount')
      //    expect(dealership.euroCategory(5)).to.contain('We have added 5% discount')
      // });
      // it('works with valid extra input', () => {
      //    expect(dealership.euroCategory(0)).to.contain('Your euro category is low')
      //    expect(dealership.euroCategory(-1)).to.contain('Your euro category is low')
      // });

   });

})

// ## === ----Expect to throw ERROR === ---- ##
// it('works with invalid input', () => {
//    expect(() => library.arrangeTheBooks(undefined)).to.throw();
// });

// ## === ---- DONT USE === ---- ##
// - don't use contain insted of equal

// ## === ---- CHECK LIST === ---- ##
// ## === ---- [x] WHAT TO CHECK FOR === ---- ##

// [] isArr = throw ERROR
// {} isObj = throw ERROR
// '' empty str = throw ERROR?

// if input is number
// - negative
// - floating point
// - integer

// ## === ---- to.Fixed(2) === ---- ##
// it('CHECK IF USING to.Fixed(2)', () => {
//    expect(testNumbers.sumNumbers(1.555, 1.333)).to.be.equal('2.89');
// });
// if input is number and the function have a method .toFixed(2)
// - the function return string
// [x] (1.555 + 1.333).toFixed(2) = ('2.89');
// [x] (1.555 - 1.333).toFixed(2) = ('0.22');

// ## === ---- equals of [] || {} === ---- ##
// - use to.be.deep.equal instead of only to.be.equal

// it('works with valid input', () => {
//    expect(numberOperations.sumArrays([1, 2, 3], [4, 5, 6])).to.be.deep.equal([5, 7, 9]);
// });




