// 1. ____________________ПЕРЕПРИСВОЕНИЕ ПЕРЕМЕННЫХ_________

let myAge = 24;
console.log(myAge); //-----> регистр имеет значение, каждое новое слово , кроме первого,
//должно начинаться с большой буквы первоеВтороеТретьеСлово

//Имя переменной для хранения цвета глаз пользователя сайта----->
const customerWithEyesColor = "blue";

//_________________________Переприсвоение

let a = "start"; // Исходное "!!! CONDITION, STAGE - СОСТОЯНИЕ, CТАДИЯ "
a = "ready";

let b = "not ready";

b = a + " homework on: Math"; // 1. b= a-->(ready) + " homework on Math";
//2. b= ready +  homework on Math; 3. b= ready homework on Math
a = b + " and English"; // 1. a= b-->(ready homework on Math) + " and English";
//2. a= ready homework on Math +  and English;
//3. a= ready homework on Math and English;

//a="not redy"
console.log(a); // ready homework on: Math and English
console.log(b); // ready homework on: Math

//  2. ________ОДИНАКОВОНАЗВАННЫЕ ПЕРЕМЕННЫЕ, НО ВНУТРИ РАЗНЫХ БЛОКОВ_________

//Stage - стадия
let stage = "start";

if (true) {
  let stage = "";
  stage = stage + "up";
  console.log(stage);
}
console.log(stage); // Две переменные с одинаковым названием stage, но с разным значением, и находящиеся
//в разных блоках ( глобальном поле видимости и блоке if {}), будут возвращать два разных значения,
//которые не зависят от значений друг друга

let myTask = "homework";

if (myTask == false) {
  // для того, чтобы задать условие в блоке if (___?) можно использовать переменную,
  // которая находится в другом глобальном блоке
  let myTask = "resting";
  console.log(myTask);
} // НО на выходе в результате выполнения логики, названия будут одинаковые,
// но значения этих двух переменных будут разные
console.log(myTask);

// 3.______________КОНСТАНТЫ___________

// ! ! ! Erorr потому что значение константы нельзя переприсвоить ! ! !
const person_name = "Sasha";
//  person_name = "Lera"
//  console.log(person_name)
//  НО если константа это объект, то тогда можно изменить его свойство(a) и
//  значение(я) этого свойства внутри этого объекта или
//  добавлять новые свойства и их значения
const person = {
  name: "Sasha",
};
console.log(person.name);

person.name = "Sasha becomes ---> LERA";
console.log(person.name);

// тоже самое будет работать и для массивов

// 4. ____________Операторы СРАВНЕНИЯ и ПРОВЕРКИ НА РАВЕНСТВО __________
// Знак "=" равно пишется после операторов
a >= b;
a <= b;
a % b;
1 == true; //  -----> результат будет true т.к это нестрогое равенство
1 === true; /// -----> результат будет false т. к. это СТРОГОЕ равенство, проверка по типам данных

// 5.____________ПРИОРИТЕТ ВЫПОЛНЕНИЯ ОПЕРАТОРОВ________________-
// ОПРЕДЕЛЯТЬ ПО ТАБЛИЦЕ ПРИОРИТЕТОВ

// 6. __________НЕРАВЕНСТВО___________
//a !== b
const person_name_1 = "Sasha";
const person_name_2 = "Lera";
// "!!! CONFORMITY - СООТВЕТСТВИЕ " проверка на соответствие константы 1 ----> константе 2, мы говорим о том,
//что конст 1 не равно (!==) конст 2, поэтому результат выполнения, согласно нашему условию ----> будет true/
console.log(person_name_1 !== person_name_2);






f



// function number(a, b, c){
//   if (a){(console.log("вы согласны?"), b ())}
//   else {console.log(a), c() }
// }

// number("Вы согласны?", function (){console.log(" yes") }, function() {console.log("no")} )