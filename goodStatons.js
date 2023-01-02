const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (stations) {
  const goodstations = [];
  for (const station of stations) {
    let stationCapacity = station[1];
    if (stationCapacity >= 20) {
      let stationType = station[2];
      if (stationType === "school" || stationType === "community centre") {
        goodstations.push(station[0]);
      }
    }
  }
  return goodstations;
};

console.log(chooseStations(stations));
