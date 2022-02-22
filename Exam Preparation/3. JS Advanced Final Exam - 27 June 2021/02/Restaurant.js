class Restaurant {
   constructor(budgetMoney) {
      this.budgetMoney = budgetMoney;
      this.menu = {};
      this.stockProducts = {};
      this.history = [];
   };
   loadProducts(input) {

      input.forEach(i => {
         let [productName, qty, price] = i.split(' ');
         if (this.budgetMoney >= Number(price)) {
            this.budgetMoney -= Number(price);
            if (!this.stockProducts.hasOwnProperty(productName)) {
               this.stockProducts[productName] = Number(qty);
            } else if (this.stockProducts.hasOwnProperty(productName)) {
               this.stockProducts[productName] += Number(qty);
            };
            this.history.push(`Successfully loaded ${qty} ${productName}`);
         } else {
            this.history.push(`There was not enough money to load ${qty} ${productName}`);
         }
      });
      return this.history.join('\n');
   };
   addToMenu(meal, neededProduct, price) {
      if (!this.menu.hasOwnProperty(meal)) {
         this.menu[meal] = {};

      } else if (this.menu.hasOwnProperty(meal)) {
         return `The ${meal} is already in the our menu, try something different.`;
      };
      neededProduct.forEach(p => {
         let [productName, ...rest] = p.split(' ');
         if (rest.length !== 1) {
            productName = `${productName} ${rest[0]}`;
            this.menu[meal][productName] = Number(rest[1]);
         } else {
            this.menu[meal][productName] = Number(rest[0]);
         };
         //   this.menu[meal].quantity = Number(qty);
      });
      this.menu[meal].price = Number(price);
      let mealsInMenu = Object.keys(this.menu);
      if (mealsInMenu.length === 1) {
         return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else {
         return `Great idea! Now with the ${meal} we have ${mealsInMenu.length} meals in the menu, other ideas?`;
      }
   };
   showTheMenu() {
      const meals = Object.keys(this.menu);
      let output = [];
      if (meals.length === 0) {
         return `Our menu is not ready yet, please come later...`;
      } else {
         for (const meal in this.menu) {
            output.push(`${meal} - $ ${this.menu[meal].price}`);
         };
      };
      return output.join('\n');
   };
   makeTheOrder(meal) {
      if (!this.menu.hasOwnProperty(meal)) {
         return `There is not ${meal} yet in our menu, do you want to order something else?`;
      };
      for (let product in this.menu[meal]) {
         if (product === 'price') {
            continue;
         };
         let inStock = this.stockProducts[product];
         let needed = this.menu[meal][product];
         if (needed > inStock || inStock === 0 || inStock === undefined) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
         };
      };
      for (let product in this.menu[meal]) {
         if (product === 'price') {
            continue;
         };
         let inStock = this.stockProducts[product];
         let needed = this.menu[meal][product];
         inStock -= needed;
      };
      this.budgetMoney += this.menu[meal].price;
      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
   };
};