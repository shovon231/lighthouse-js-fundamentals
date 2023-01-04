const range = function (start, end, step) {
  let steps = [];
  if (step >= 0) {
    for (let i = start; i <= end; i += step) {
      steps.push(i);
    }
  } else {
    steps = [];
  }

  return steps;
};
console.log(range());
console.log(range(10, 0, 2));
console.log(range(0, 10, -2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
