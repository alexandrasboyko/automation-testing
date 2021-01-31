// function sum (a, b){
//   console.log(sq(a) + sq(b))
// }
//   sq = function (x) {
//    x = x*x
//   }
// sum (2,3)

// function makeAdder(x) {
//   console.log(x)
//   return function(y) {
//     console.log(y)
//     return x + y;

//   };
// };

// var add5 = makeAdder(5);
// // var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// // console.log(add10(2));

// function main (x){
// console.log(x)
// return function (y) {
//   console.log(y)
// return x+y
// }
// }
// let number = main (6)
// console.log(number(4))

// let new_pos = (function () {
//     let counter_value = 0;
//     function plus_counter(value) {
//       counter_value += value;
//     }
//     return {
//       increment: function () {
//         plus_counter(1);
//       },
//       val: function () {
//         return counter_value;
//       },
//     };
//   })();
//   // console.log(new_pos.increment());

//   let doctor = (function () {
//     let time_start = 9;
//     function entry_time(entry_time) {
//       console.log((time_start += entry_time));
//     }
//     return {
//       one_over: function () {
//         entry_time(1.0);
//       },
//       half_over: function () {
//         entry_time(0.3);
//       },
//       value: function () {
//         return time_start;
//       },
//     };
//   })();

// doctor.one_over()
// doctor.one_over()
// doctor.value()

//   let chek_age = (arg) => {
//     if (typeof arg === "number") return arg;
//     else console.log("ошибка");
//   };

//   let age =  chek_age (15) > 16
//       ? () => {return age}
//       : () => console.log("доступ ограничен");
// console.log(age())

//   let person = age
//     ? () => console.log("нажмите + или выход")
//     : () => console.log("Выход");

// let ask = (
//   quest,
//   yes,
//   no = () => {
//     return 0;
//   }
// ) => {
//   if (quest) yes();
//   else no();
// };
// console.log(
//   ask(
//     "",
//     () => console.log("Вы согласились"),
//     () => console.log("Вы отменили")
//   )
// );

// const obj = {
//   sayHI: function () {
//     console.log("ПРИВЕТ 1");
//   },
//   sayHi() {
//     console.log("привет 2");
//   },
// };
// obj.sayHI();
// obj.sayHi();

function createObjectInterface() {
  const newObject = {};

  return {
    createName(name) {
      Object.assign(newObject, { first_name: name });
    },

    createSecName(secname) {
      Object.assign(newObject, { second_Name: secname });
    },
    newObject() {
      return `${     newObject.first_name ? newObject.first_name  : ""}  ${newObject. second_Name? newObject.second_Name: "" }`;
    },
  };
}
const person = createObjectInterface();
person.createName("Ivan")
person.createSecName("Ivanov")
console.log(person.newObject())
