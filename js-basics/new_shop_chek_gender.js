const staff = {
  admin: [{ name: "Emmy", age: 26, gender: "W" }],
  cashier: [{ name: "Nick", age: 25, gender: "M" }],
  seller: [
    { name: "Jina", age: 23, gender: "W" },
    { name: "Paul", age: 21, gender: "M" },
    { name: "Shy", age: 23, gender: "M" },
  ],
};
// function managment(new_staff_person) {
//   const { category, ...rest } = new_staff_person;
//   if (staff[category] === undefined) {
//     staff[category] = [];
//   }
//   staff[category].push(rest);
// }

//   managment({ category: "driver", name: "Sam", age: 30, gender: "M" })

// console.log(staff);

// // function get_staff_by_category(category) {
// //   return staff[category];
// // }
// // console.log(get_staff_by_category("driver"));

// // function chek_gender() {
// //   const categories_keys = Object.keys(staff);

// //   const new_obj_with_elements = [];

// //   categories_keys.forEach(function (category) {
// //     staff[category].forEach(function (element) {
// //       new_obj_with_elements.push(element);
// //     });
// //   });
// //   return new_obj_with_elements.reduce(function (accumulator, element) {
// //     const { gender, ...rest } = element;
// //     if (accumulator[gender] == undefined) {
// //       accumulator[gender] = [];
// //     }
// //     accumulator[gender].push(rest);
// //     return accumulator;
// //   }, {});
// // }
// // console.log(chek_gender());

// function find_staff_person(obj_person) {
//   const { category, ...rest } = obj_person;
//   const keys_of_rest = Object.keys(rest);
//   const founded_person = staff[category].find(function (element) {
//     return keys_of_rest.every(function (key) {
//       return element[key] === obj_person[key];
//     });
//   });
//     const index = staff[category].findIndex( function (element){
//       element === founded_person&&element!==-1 })
//     const new_obj_from_arr = staff[category].splice(index, 1)[0];
//     return
//     {
//         show: function () {
//         return new_obj_from_arr }
//         back: function(){
//             managment( {category,...new_obj_from_arr})
//         }
//     }
//     }

// console.log("find ->   ")
// console.log((find_staff_person({category: "driver", name: "Sam", age: 30, gender: "M" })));
// console.log(staff)

const arr = [1, 2, 3, 4, 5];
const reducer = arr.reduce(function (accumulator, element) {
  return (accumulator + element);
}, 0);
console.log(reducer);
