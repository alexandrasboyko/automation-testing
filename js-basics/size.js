//const points = [40, 100, 1, 5, 25, 10];
//  function mySort(a,b){
//     console.log("a-b", a, b, a-b)
//     return( a-b)

//    }

// console.log(points.sort(mySort))
// points.sort(function(a,b){
//     console.log("a-b", a-b, a,b )
//     return a-b
// })
// console.log(points)

// console.log(closes.sort())
// sizes.sort(function(a,b) {
//     return a-b
// })
// console.log(sizes)
// const new_smot = []

//  console.log(A)
// const closes =["skirt", "jogers", "jeans"]
// const sizes=["skirt44", "jogers46", "jeans42"]

// const arrObjects = [];

// arrObjects[0] = {
//   size: 42,
//   name: "skirt",
// };
// arrObjects[1] = {
//   size: 48,
//   name: "jogers",
// };
// arrObjects[2] = {
//   size: 46,
//   name: "jeans",
// };

// const arrObjects_2 = [];

// arrObjects_2[0] = {
//   size: 44,
//   name: "skirt",
// };
// arrObjects_2[1] = {
//   size: 40,
//   name: "jogers",
// };
// arrObjects_2[2] = {
//   size: 38,
//   name: "T-shirt",
// };
// //console.log(arrObjects2)

// function sort(a, b) {
//   console.log(a.size, b.size, a.size - b.size);
//   return a.size - b.size;
// }
// console.log(arrObjects.sort(sort), arrObjects_2.sort(sort));

// function create_obj({ name, size }) {
//   return {
//     size,
//     name,
//     price: 100,
//   };
// }
// console.log(arrObjects.map(create_obj));
// console.log(arrObjects_2.map(create_obj));
// const for_chek2 = arrObjects_2.filter(function (shmot) {
//   console.log(shmot.name === "jogers");
//   return shmot.name === "jogers";
// });
// const for_chek = arrObjects.filter(function (shmot) {
//   console.log(shmot.name === "jogers");
//   return shmot.name === "jogers";
// });
// console.log(for_chek);
// console.log(for_chek2);

// // const array = [];

// // array[0] = {
// //   store: "River",
// // };
// // array[1] = {
// //   store: "Dream",
// // };
// // array[3] = {
// //   store: "Lavina",
// // };
// // function sort_shop(shop, sizesOfcloses){
// //   if( sizesOfcloses >=48 ) console.log (shop.store ==="Lavina")} 
// //   else 
// //       {shop.store==="Dream "}
// // array(for_chek(sort_shop))


function AA (a,b){
    function DD (x){
        return x*x
    }
    
    return DD(a)+DD(b)
}
a=AA(1,2),
b=AA(3,4), 
c=AA(30000, 9)
console.log(a)
console.log(b)
console.log(c)