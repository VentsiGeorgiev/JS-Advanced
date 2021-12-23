function carFactory({ model, power, color, carriage, wheelsize }) {
 const posibilities = [
  { power: 90, volume: 1800 },
  { power: 120, volume: 2400 },
  { power: 200, volume: 3500 }
 ];

 const fulfillOrder = {
  model,
  engine: posibilities.find((p) => power <= p.power),
  carriage: { type: carriage, color: color },
  wheelsize: Array(4).fill(wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize)
 };
 return fulfillOrder
}
console.log(carFactory({
 model: 'VW Golf II',
 power: 90,
 color: 'blue',
 carriage: 'hatchback',
 wheelsize: 14
}
));
