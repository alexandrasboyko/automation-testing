// const Papa = {
//     hi: function LL(arg){
//     console.log("55"+ arg)}

// }
// function DD(a){
// return(a);}
// Papa.hi(DD(3))
const group = [];
const people = ["Alina", "Danya", "Filya", "Pavel", "Elya"];
const women_names = ["Alina", "Elya", "Lilya", "Tanya"];
const man_names = ["Vitya", "Danya", "Pavel"];

function newProfile_Woman(name, sex) {
  return {
    name,
    age: 21,
    sex,
  };
}
function newProfile_Man(name, sex) {
  return {
    name,
    age: 21,
    sex,
  };
}

function change_options(userName) {
  let item;
  if (women_names.includes(userName)) {
    item = newProfile_Woman(userName, "FM");
  } else if (man_names.includes(userName)) {
    item = newProfile_Man(userName, "M");
  } else {
    console.log("error");
    return;
  }

  console.log(item)
  group.push(item);
}

people.forEach(change_options); console.log(group)


