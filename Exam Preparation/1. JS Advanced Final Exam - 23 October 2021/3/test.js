const library = require('./library');
const { expect } = require('chai');

describe('library', () => {

   describe('calcPriceOfBook', () => {
      it('works with valid input', () => {
         expect(library.calcPriceOfBook('JS Advanced', 2022)).to.be.equal('Price of JS Advanced is 20.00');
         //Adding new test
         expect(library.calcPriceOfBook('JS Advanced', 1981)).to.be.equal('Price of JS Advanced is 20.00');
      });
      it('works with valid input and dicount', () => {
         expect(library.calcPriceOfBook('JS Advanced', 1980)).to.be.equal('Price of JS Advanced is 10.00');
         expect(library.calcPriceOfBook('JS Advanced', 1979)).to.be.equal('Price of JS Advanced is 10.00');
      });
      it('works with invalid input', () => {
         expect(() => library.calcPriceOfBook(2022, 'JS Advanced')).to.throw();
         expect(() => library.calcPriceOfBook(undefined, 'JS Advanced')).to.throw();
         expect(() => library.calcPriceOfBook('JS Advanced', 20.22)).to.throw();
         expect(() => library.calcPriceOfBook('JS Advanced', '2022')).to.throw();
         expect(() => library.calcPriceOfBook()).to.throw();
         // Adding new test
         expect(() => library.calcPriceOfBook([], 1)).to.throw();
         expect(() => library.calcPriceOfBook({}, 1)).to.throw();
         expect(() => library.calcPriceOfBook('JS', {})).to.throw();
         expect(() => library.calcPriceOfBook('JS', [])).to.throw();
      });

   });

   describe('findBook', () => {

      it('works with invalid input', () => {
         expect(library.findBook(['JS Web', 'JS Adv', 'JS Ninja'], 'JS Ninja')).to.be.equal('We found the book you want.');
      });
      it('works with book not found', () => {
         expect(library.findBook(['JS Web', 'JS Adv', 'JS Ninja'], 'JS God')).to.be.equal('The book you are looking for is not here!');
      });
      it('works with invalid input', () => {
         expect(() => library.findBook([], 'JS Advanced')).to.throw();
         expect(() => library.findBook(undefined, 'JS Advanced')).to.throw();
      });

   });

   describe('arrangeTheBooks', () => {

      it('works with invalid input', () => {
         expect(() => library.arrangeTheBooks(undefined)).to.throw();
         expect(() => library.arrangeTheBooks([])).to.throw();
         expect(() => library.arrangeTheBooks('1')).to.throw();
         expect(() => library.arrangeTheBooks(-1)).to.throw();
         expect(() => library.arrangeTheBooks(1.1)).to.throw();
         expect(() => library.arrangeTheBooks('a')).to.throw();
         //Adding new test
         expect(() => library.arrangeTheBooks({})).to.throw();
      });

      it('works with valid input to 40 books', () => {
         expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
      });
      it('works with valid input over 40', () => {
         expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
      });

   });

})