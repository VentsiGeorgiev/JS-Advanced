const mathEnforcer = require('./index');
const { expect } = require('chai');

describe('mathEnforcer', () => {

   describe('addFive', () => {
      it('invalid input', () => {
         expect(mathEnforcer.addFive('5')).to.be.undefined;
         expect(mathEnforcer.addFive('a')).to.be.undefined;
         expect(mathEnforcer.addFive()).to.be.undefined;
         expect(mathEnforcer.addFive([])).to.be.undefined;
      });
      it('works with valid input', () => {
         expect(mathEnforcer.addFive(5)).to.equal(10);
         expect(mathEnforcer.addFive(5.01)).to.be.closeTo(10.01, 0.01);
         expect(mathEnforcer.addFive(-5.05)).to.be.closeTo(-0.05, 0.01);
         expect(mathEnforcer.addFive(-10)).to.equal(-5);
      });
   })

   describe('subtractTen', () => {
      it('invalid input', () => {
         expect(mathEnforcer.subtractTen('5')).to.be.undefined;
         expect(mathEnforcer.subtractTen('a')).to.be.undefined;
         expect(mathEnforcer.subtractTen()).to.be.undefined;
         expect(mathEnforcer.subtractTen([])).to.be.undefined;
      });
      it('works with valid input', () => {
         expect(mathEnforcer.subtractTen(10)).to.equal(0);
         expect(mathEnforcer.subtractTen(11.01)).to.be.closeTo(1.01, 0.01);
         expect(mathEnforcer.subtractTen(-1.01)).to.be.closeTo(-11.01, 0.01);
         expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
         expect(mathEnforcer.subtractTen(5)).to.equal(-5);
         expect(mathEnforcer.subtractTen(10.001)).equal(10.001 - 10);
      });
   });

   describe('sum', () => {
      it('invalid input', () => {
         expect(mathEnforcer.sum('1', '1')).to.be.undefined;
         expect(mathEnforcer.sum('1', 1)).to.be.undefined;
         expect(mathEnforcer.sum('', 1)).to.be.undefined;
         expect(mathEnforcer.sum(1, '1')).to.be.undefined;
      });

      it('valid input', () => {
         expect(mathEnforcer.sum(1, 1)).to.equal(2);
         expect(mathEnforcer.sum(1.5, 1.5)).to.equal(3);
         expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
         expect(mathEnforcer.sum(-2, 1)).to.equal(-1);
      })
   })


})