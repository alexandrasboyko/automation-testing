const { deepStrictEqual } = require("assert");
function summ(...args) {
  return args.reduce(function (a, b)  {
      return a + b});
}

deepStrictEqual(summ(1, 2, 3), 6);

// function myAge(year) {
//   return 2020 - year;
// }
// function infoAboutMe(name, year) {
//   const age = myAge(year);
//   console.log( Мое имя: " + name+". Мой возраст: " + age);
// }
// infoAboutMe("Sasha", 1996);

function calculAge(year) {
 return 2020 - year;
}

 function infoAboutMe(name, year) {
   const age = calculAge(year);
  return ", Name " + name + ", age " + age;
}

function allInfoAboutMe(name, year, prof) {
const ageName = infoAboutMe(name, year);
return(ageName+", prof " + prof);
}



function moreInfoAboutMe(name, year, prof, sex){
    const moreInfo=allInfoAboutMe(name, year, prof)
    return(moreInfo+ ", Пол "+sex)
    }
   
    function infoAboutNationality(name, year, prof, sex, nation){
   const nationality= moreInfoAboutMe(name, year, prof, sex)
return(nationality+", nation "+nation)}


function resume (lastName, name, year, prof, sex, nation){
const fullInfo= infoAboutNationality( name, year, prof, sex, nation)
return(" lastname "+ lastName+ fullInfo )}

function resume2(lastName, name, year, prof, sex, nation, language){
const lang= resume(lastName, name, year, prof, sex, nation)
return(lang+", language "+language )}
resume2("Boiko", "Sasha", 1996, "creator", "female", "ukrainian", "russian")

function resume3 (lastName, name, year, prof, sex,nation, language, hobby ) {
const resHobby=resume2(lastName, name, year, prof, sex,nation, language)
return(resHobby+", hobby"+hobby)
}

function resume4 (lastName, name, year, prof, sex, nation, language, hobby, telephone){
const tel=resume3(lastName, name, year, prof, sex, nation, language, hobby)
console.log(tel+", telephone"+telephone)}
resume4("Boiko", "Sasha", 1996, "CD", "fem", "ukr", "rus", " art", " 1000000")





//function study(discipline) {
 // return (discipline = ++discipline);
//}
// function forTimetable(teacher, discipline) {
//   //const stdiscipline = discipline;
//   console.log("Учитель: " + teacher + " ведет дисциплину под # ", ++discipline);

//   if (discipline === 1) {
//     forTimetable("Петров", 1);
//   }
// }
// forTimetable("Иваненко", 0);

// function currentDay(day) {
//   return (day = 7 - day);
// }
//  function week(day, Weekends = [6, 7]) {
//  const weekendDays = [...Weekends].sort(); 
//  const dayInWeekend = weekendDays.indexOf(day) + 1;
//  if (dayInWeekend > 0) {
//    console.log(
//      "Сегодня " + day + " день недели " + ", а это значит " + dayInWeekend + " выходной"
//    );
//  } else {
//    console.log("Weekdays");
//  }
// }
 //week( 4, [6,7,2]);


