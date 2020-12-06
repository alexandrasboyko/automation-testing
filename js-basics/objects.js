// // 11 Объекты

// const lang = ["Java", "JS", "Delphi"];
// let progLang;
// for (let nameOfLang of lang) {
//   if (nameOfLang === "Java") {
//     progLang = nameOfLang;
//     break;
//   }
// }
// console.log(progLang);


// const Person = {
//   name: "Sasha",
//   age: function (bornYear) {
//     if (bornYear !==1996 || bornYear !==1997){
//    return 2020 - bornYear };
//   },
//   job: function (lang) {
//     console.log("programmer", lang);
//   },
// infoabout: function (x, bornYear) {
//     const agenow = Person.age(bornYear);
//     console.log(x, agenow)
// }}

// //function InFoAboutMe(x, bornYear) {
// //const agenow = Person.age(bornYear)
//  // console.log(x, agenow);
// //}

// Person.name, Person.age(1999);

// Person.job(progLang);

let bornYear=1996
yearCurr=2020
const person = {
  name: "Sasha",
  lastName : "Boiko",
  age: function (yearCurr,bornYear){
   return yearCurr-bornYear
  } ,
  sex: "female",
  prof: "CD",
  nationality: "ukr",
  languages: ["rus", "ukr", "md"],
  child: true
}

person.age(2020,1996)
console.log(person)
const name=`my name: ${person.name}`

console.log(name)


console.log(Number.isNaN(1996))
console.log(Math.pow(5, 3))
console.log(isFinite(isFinite))
const stringInt="40"
console.log(+stringInt+2)
console.log(+(0.4+0.2).toFixed(1))
console.log(Math.max(2,4,6))

console.log(Math.random())