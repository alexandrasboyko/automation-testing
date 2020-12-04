// 11 Объекты

const lang = ["Java", "JS", "Delphi"];
let progLang;
for (let nameOfLang of lang) {
  if (nameOfLang === "Java") {
    progLang = nameOfLang;
    break;
  }
}
console.log(progLang);


const Person = {
  name: "Sasha",
  age: function (bornYear) {
    if (bornYear !==1996 || bornYear !==1997){
   return 2020 - bornYear };
  },
  job: function (lang) {
    console.log("programmer", lang);
  },
infoabout: function (x, bornYear) {
    const agenow = Person.age(bornYear);
    console.log(x, agenow)
}}

//function InFoAboutMe(x, bornYear) {
//const agenow = Person.age(bornYear)
 // console.log(x, agenow);
//}

Person.name, Person.age(1999);

Person.job(progLang);


