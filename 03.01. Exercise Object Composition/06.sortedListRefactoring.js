function sorted(input) {
  let numbersList = [];
  let length = 0;

  let calcs = {
    add,
    remove,
    get,
    get size() {
      return length;
    },
  };

  function add(element) {
    numbersList.push(element);
    length = numbersList.length;
    return numbersList.sort((a, b) => a - b);
  }

  function remove(index) {
    if (0 <= index && index < numbersList.length) {
    }
  }
}
