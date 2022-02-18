const cinema = require('./cinema');
const { expect } = require('chai');

describe('cinema', () => {

   describe('showMovies', () => {
      it('works with empty array', () => {
         expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
      });
      it('works with valid input', () => {
         expect(cinema.showMovies(['JS', 'JS Adv', 'JS Web'])).to.be.equal('JS, JS Adv, JS Web');
      });
      it('works with valid input', () => {
         expect(cinema.showMovies(['JS'])).to.be.equal('JS');
      });
   });

   describe('ticketPrice', () => {
      it('works valid input', () => {
         expect(cinema.ticketPrice('Premiere')).to.be.equal(12);
         expect(cinema.ticketPrice('Normal')).to.be.equal(7.5);
         expect(cinema.ticketPrice('Discount')).to.be.equal(5.5);
      });
      it('works invalid input', () => {
         expect(() => cinema.ticketPrice('')).to.throw();
         expect(() => cinema.ticketPrice('a')).to.throw();
      });

   });

   describe('swapSeatsInHall', () => {
      it('one of two numbers doesnt exist', () => {
         expect(cinema.swapSeatsInHall(1)).to.be.equal('Unsuccessful change of seats in the hall.');
      });
      it('numbers are not integer', () => {
         expect(cinema.swapSeatsInHall('1', '1')).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(1, '1')).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall('1', 1)).to.be.equal('Unsuccessful change of seats in the hall.');
      });
      // adding new test
      it('numbers are not integer - {} or []', () => {
         expect(cinema.swapSeatsInHall(1, [])).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(1, {})).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall([], 1)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall({}, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(undefined)).to.be.equal('Unsuccessful change of seats in the hall.');

      });

      it('one of the number is greater than 20', () => {
         expect(cinema.swapSeatsInHall(1, 21)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(21, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
      });
      it('floating point number', () => {
         expect(cinema.swapSeatsInHall(1.1, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(5, 1.1)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(5.5, 1.1)).to.be.equal('Unsuccessful change of seats in the hall.');
      });
      it('negative number', () => {
         expect(cinema.swapSeatsInHall(-1, 2)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(2, -1)).to.be.equal('Unsuccessful change of seats in the hall.');
      });
      it('seats are <= 0', () => {
         expect(cinema.swapSeatsInHall(-1, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(0, -1)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(0, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(0, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(1, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
      });

      it('valid input', () => {
         expect(cinema.swapSeatsInHall(1, 5)).to.be.equal('Successful change of seats in the hall.');
         expect(cinema.swapSeatsInHall(2, 6)).to.be.equal('Successful change of seats in the hall.');
      });

   });
})