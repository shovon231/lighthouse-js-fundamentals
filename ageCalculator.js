const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = 0;
  age = name + " is " + (currentYear - yearOfBirth) + " years old.";
  return age;
};

console.log(ageCalculator("Suzie", 1983, 2015));
