const ring = (time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  },time);
};

let loop = (array) => {
  for (let time of array) {
    if (time < 0) {
      //Negative number - skip
    } else if (isNaN(time)) {
      //Not a number - skip
    } else {
      time = time * 1000;
      ring(time);
    }
  }
};
const arg = process.argv.slice(2);
loop(arg);