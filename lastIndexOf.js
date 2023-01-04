const lastIndexOf = function (arr, indexNum) {
  let indexOf = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (indexNum === arr[i]) {
      indexOf = i;
    }
  }
  if (indexOf < 0) {
    return -1;
  } else {
    return indexOf;
  }
};

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([1], 1), "=?", 0);
