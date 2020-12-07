const class_A11 = [];
const children = ["Danya", "Ivan", "Katya"];

const mensName = ["Danya", "Ivan", "Petr", "Igor"];
const womensName = ["Ira", "Lilya", "Katya"];

const userExample = {
  age: 24,
  name: "Sasha",
  lastName: "Boyko",
  sex: "FM",
  address: "Kolomyivsky lane, 17/31A",
  language: ["rus", "ukr"],
};

function createNewPupilGirl(age, name, lastName, address, language) {
  return {
    age,
    name,
    //lastName,
    //address,
    language,
    sex: "FM",
  };
}
function createNewPupilBoy(age, name, lastName, address, language) {
  return {
    age,
    name: name,
    //lastName,
    //address,
    language,
    sex: "M",
  };
}

function chekGender(childName) {
  let expectedPupil = null;
  if (mensName.includes(childName)) {
    expectedPupil = createNewPupilBoy(16, childName);
  } else if (womensName.includes(childName)) {
    expectedPupil = createNewPupilGirl(15, childName);
  } else {
    console.log("error");
    return;
  }
  console.log(expectedPupil);

  class_A11.push(expectedPupil);
}

children.forEach(chekGender);
console.log("Klass: ", class_A11);
const boysFromClass_11_A = class_A11.filter(function (pupilObject) {
  console.log(pupilObject.sex, pupilObject.sex === "M");
  return pupilObject.sex === "M";
});
console.log(boysFromClass_11_A);

const girlsFromClass_11_A = class_A11.filter(function (pupilObject) {
  console.log(pupilObject.sex === "FM", pupilObject.sex);
  return pupilObject.sex === "FM";
});
console.log(girlsFromClass_11_A)
