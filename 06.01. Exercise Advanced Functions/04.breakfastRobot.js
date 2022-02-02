function solve(command, product) {
  const recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      flavour: 20,
      fat: 7,
    },
    eggs: {
      protein: 5,
      flavour: 1,
      fat: 1,
    },
    turkey: {
      carbohydrate: 10,
      protein: 10,
      fat: 10,
      flavour: 10,
    },
  };

  const stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const commands = {
    restock: (microelement, quantity) => {
      stock[microelement] += quantity;
      console.log('Success');
    },
    prepare: (product, quantity) => {
      let recipe = Object.entries(recipes[product]);

      for (let [key, value] of recipe) {
        console.log(key, value);
      }
    },
    // report:,
  };
  let action = commands[command];
  action(prod, 2);
}
solve('prepare', 'eggs');
