function solve(speed, area) {
  let morowayLimit = 130;
  let interstateLimit = 90;
  let cityLimit = 50;
  let residentialLimit = 20;
  let status = '';

  switch (area) {
    case 'motorway':
      if (speed <= morowayLimit) {
        console.log(`Driving ${speed} km/h in a ${morowayLimit} zone`);
      } else {
        let difference = speed - morowayLimit;
        speedStatus(difference);
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${morowayLimit} - ${status}`);
      }
      break;
    case 'interstate':
      if (speed <= interstateLimit) {
        console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
      } else {
        let difference = speed - interstateLimit;
        speedStatus(difference)
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
      }
      break;
    case 'city':
      if (speed <= cityLimit) {
        console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
      } else {
        let difference = speed - cityLimit;
        speedStatus(difference)
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
      }
      break;
    case 'residential':
      if (speed <= residentialLimit) {
        console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
      } else {
        let difference = speed - residentialLimit;
        speedStatus(difference)
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
      }
      break;

  }

  function speedStatus(speedDiference) {
    if (speedDiference <= 20) {
      return status = 'speeding'
    } else if (speedDiference <= 40) {
      return status = 'excessive speeding'
    } else {
      return status = 'reckless driving'
    }
  }
}
solve(120, 'interstate')
solve(200, 'motorway')