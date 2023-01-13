const repeatNumbers = function (data) {
  let valueToRepeat = "";
  let timesToRepeat;
  let k = "";
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    valueToRepeat = data[i][0].toString();
    timesToRepeat = data[i][1];
    count++;
    while (timesToRepeat > 0) {
      k += valueToRepeat;
      timesToRepeat--;
    }
    if (count !== data.length) {
      k += ",";
    }
  }
  return k;
};

console.log(repeatNumbers([[5, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
