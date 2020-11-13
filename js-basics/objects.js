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
  age: 24,
  job: function (lang) {
    console.log("programmer", lang);
  },
};
Person.job(progLang);

