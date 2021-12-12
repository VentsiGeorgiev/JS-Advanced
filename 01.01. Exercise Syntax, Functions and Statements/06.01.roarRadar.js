function solve(speed, area) {
  let motorwayLimit = 130;
  let interstateLimit = 90;
  let cityLimit = 50;
  let residentialLimit = 20;
  let overTheSpeed = 0;
  let status = '';

  switch (area) {
    case 'motorway':
      if (speed > motorwayLimit) {
        overTheSpeed = speed - motorwayLimit;
      }
      break;
    case 'interstate':
      if (speed > interstateLimit) {
        overTheSpeed = speed - interstateLimit;
      }
      break;
    case 'city':
      if (speed > cityLimit) {
        overTheSpeed = speed - cityLimit;
      }
      break;
    case 'residential':
      if (speed > residentialLimit) {
        overTheSpeed = speed - residentialLimit;
      }
      break;
  }

  if (overTheSpeed > 0) {
    if (speed > 40) {
      status = 'reckless driving';
    } else if (speed > 20) {
      status = 'excessive speeding';
    } else {
      status = 'speeding';
    }
  }

  if (overTheSpeed > 0) {
    console.log(`The speed is ${overTheSpeed} km/h faster than the allowed speed of ${speedlimit} - {status}`);
  }
}
solve(40, 'city')