const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "plumpness";

const judgeVegetable = function (vegetables, metric) {
  let max = 0;
  let topSubmitter;
  for (let i = 0; i <= vegetables.length; i++) {
    for (let vegetable in vegetables[i]) {
      if (metric === vegetable) {
        if (max < vegetables[i][vegetable]) {
          max = vegetables[i][vegetable];
          topSubmitter = vegetables[i].submitter;
        }
      }
    }
  }
  return topSubmitter;
};
judgeVegetable(vegetables, metric);
