const loopyLighthouse = function (range, multiple, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiple[0] === 0 && i % multiple[1] === 0) {
      console.log("BattyBeacon");
    } else if (i % multiple[0] === 0) {
      console.log("Batty");
    } else if (i % multiple[1] === 0) {
      console.log("Beacon");
    } else {
      console.log(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
