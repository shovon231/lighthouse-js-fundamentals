const instructorWithLongestName = function (instructors) {
  let longInstructorNameLength = 0;
  let longInstructorName = {};
  for (let i = 0; i < instructors.length; i++) {
    if (longInstructorNameLength < instructors[i].name.length) {
      longInstructorName = instructors[i];
      longInstructorNameLength = instructors[i].name.length;
    }
  }
  return longInstructorName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
