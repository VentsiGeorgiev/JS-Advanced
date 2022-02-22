class Bank {
   constructor(bankName) {
      this.bankName = bankName;
      this.allCustomers = [];
   }

   newCustomer({ firstName, lastName, personalId }) {

      if (this.allCustomers.some(c => c.firstName == firstName) && this.allCustomers.some(c => c.lastName == lastName)) {
         throw new Error(`${firstName} ${lastName} is already our customer!`);
      }

      this.allCustomers.push({
         firstName,
         lastName,
         personalId,
         totalMoney: 0
      })
   }

   depositMoney(personalId, amount) {
      let currCustomer = this.allCustomers.find(c => c.personalId == personalId);
      if (currCustomer.personalId !== personalId) {
         throw new Error('We have no customer with this ID!')
      }
      currCustomer.totalMoney += amount;

      return `${amount}$`
   }

   withdrawMoney(personalId, amount) {
      let currCustomer = this.allCustomers.find(c => c.personalId == personalId);
      if (currCustomer.personalId !== personalId) {
         throw new Error('We have no customer with this ID!')
      }

      if (currCustomer.totalMoney < amount) {
         throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`)
      }

      currCustomer.totalMoney -= amount;


   }

   customerInfo(personalId) {
      let currCustomer = this.allCustomers.find(c => c.personalId == personalId);
      if (currCustomer.personalId !== personalId) {
         throw new Error('We have no customer with this ID!')
      }

      let result = [];

      result.push(`Bank name: ${this.bankName}`);
      result.push(`Customer name: ${currCustomer.firstName} ${currCustomer.lastName}`);
      result.push(`Customer ID: ${currCustomer.personalId}`);
      result.push(`Total Money: ${currCustomer.totalMoney}$`);
      result.push('Transaction');

      console.log(currCustomer.information);

   }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));


bank.depositMoney(6233267, 250);
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
