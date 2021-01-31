const group_RT = [];
const students = ["Kolya", "Fedor", "Gosha", "Lilya", "Tanya", "Ulya"];
const listGroupFM = ["Sasha", "Vilena", "Lilya", "Ulya"];
const listGroupM = ["Fedor", "Artem", "Petr", "Kolya"];

function createNewStudentBoy(name, age) {
  return {
    name,
    age,
    sex: "M",
  };
}

function createNewStudentGirl(name, age) {
  return {
    name,
    age,
    sex: "FM",
  };
}
function sort(students_Name) {
  let item = null;
  if (listGroupM.includes(students_Name)) {
    item = createNewStudentBoy(students_Name, 16);
  } else if (listGroupFM.includes(students_Name)) {
    item = createNewStudentGirl(students_Name, 17);
  } else {
    console.log("error")
    return;
  }

  console.log(item);
  group_RT.push(item);
}
students.forEach(sort);
console.log("Group: ", group_RT);

const boysFromGroupRT = group_RT.filter(function (pupilObject) {
  console.log(pupilObject.sex, pupilObject.sex === "M");
  return pupilObject.sex === "M";
});
console.log(boysFromGroupRT);

const gilsGroupRT = group_RT.filter(function (pupilObject) {
  console.log(pupilObject.sex, pupilObject.sex === "FM");
  return pupilObject.sex === "FM";
});

console.log(gilsGroupRT);

