const checkAir = function (samples, threshold) {
  let dirtySample = 0;
  let cleanSample = 0;
  let percent = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtySample++;
    }
  }
  percent = dirtySample / samples.length;
  if (percent < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
