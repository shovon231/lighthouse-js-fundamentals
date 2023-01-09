const smartGarbage = function (trash, bins) {
  for (let bin in bins) {
    console.log(trash);
    if (trash === bin) {
      bins[bin] += 1;
    }
  }
  return bins;
};

smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });
