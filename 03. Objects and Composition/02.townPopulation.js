function solve(input) {
 const towns = {}

 for (let townAsString of input) {
  let [name, population] = townAsString.split(' <-> ');
  population = Number(population);
  // if (towns[name] != undefined) {
  if (towns.hasOwnProperty(name)) {
   population += towns[name];
  }
  towns[name] = population;
 }
 for (const key in towns) {
  console.log(`${key} : ${towns[key]}`);
 }
}
solve([
 'Istanbul <-> 100000',
 'Istanbul <-> 100',
 'Honk Kong <-> 2100004',
 'Jerusalem <-> 2352344',
 'Mexico City <-> 23401925',
 'Istanbul <-> 1000'
]);