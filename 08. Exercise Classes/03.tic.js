function solve(tickets, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  ticketObj = [];
  tickets.forEach((el) => {
    let [dest, price, status] = el.split('|');
    ticketObj.push(new Ticket(dest, Number(price), status));
  });

  if (criteria == 'destination') {
    ticketObj.sort((a, b) => {
      return a.destination.localeCompare(b.destination);
    });
  } else if (criteria == 'price') {
    ticketObj.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (criteria == 'status') {
    ticketObj.sort((a, b) => {
      return a.status.localeCompare(b.status);
    });
  }
  return ticketObj;
}
console.log(
  solve(
    [
      'Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed',
    ],
    'destination'
  )
);
