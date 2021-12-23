function solve(descriptor) {
 // Дефинираме шаблони на двигателя
 const engines = [
  { power: 90, volume: 1800 },
  { power: 120, volume: 2400 },
  { power: 200, volume: 3500 }
 ];
 // създаваме кола със съответен модел, шаси и цвят
 const car = {
  model: descriptor.model,
  carriage: {
   type: descriptor.carriage,
   color: descriptor.color
  },
 };
 // Определяме двигателя според подадената минимална мощност
 // Обхождаме масива с шаблони и спираме в момента, когато имаме достатъчно мощен двигател
 for (const engine of engines) {
  if (engine.power >= descriptor.power) {
   car.engine = Object.assign(engine);
   break;
  }
 }
 // Определяме размера на гумите
 /*
 if (descriptor.wheelsize % 2 == 0) {
  const wheelsize = descriptor.wheelsize - 1;
  car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize]
 } else {
  const wheelsize = descriptor.wheelsize;
  car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize]
 }
*/
 car.wheels = (new Array(4)).fill(descriptor.wheelsize % 2 ? descriptor.wheelsize : descriptor.wheelsize - 1);

 return car;
}
const car = solve({
 model: 'VW Golf II',
 power: 90,
 color: 'blue',
 carriage: 'hatchback',
 wheelsize: 14
})
console.log(car);
