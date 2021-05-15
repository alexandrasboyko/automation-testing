const arr_tovarov = [
  { name: "cap", size: "m", price: 100 },
  { name: "cap", size: "s", price: 200 },
  { name: "cap", size: "s", price: 100, category:'women' },
  { name: "dress", size: "m", price: 100 },
];
tovar_vved = { size: "s", price: 200 };
tovar_properties = ["size", "price"];

// const find_tovar = arr_tovarov.filter(function (ed_tovara){
//     return tovar_properties.every(function (key){
//         console.log(`товар введенный - ${tovar_vved[key]} , товар из массива -  ${ed_tovara[key]}`)

//         console.log(tovar_vved[key]===ed_tovara[key])
//     return tovar_vved[key]===ed_tovara[key]
//     })

// })
// console.log(find_tovar)

function tovar_category (category) {
    const tovar = arr_tovarov.filter (function (el_tovara){
        return el_tovara.category === category }).map(function 
            ({category, ...ost}) {
        return ost
    })
}
console.log(tovar_category({ name: "cap"} , {category:'women'}))





// function add_ed_tovara(ed_tovara) {
//   const keys = Object.keys(ed_tovara) //[name, size, price, m]

//   const add_tovar = keys.some(function (key) {   // 
//     return !tovar_properties.includes(key)      //  массив разрешенных ключей ["size", "price", "name"] 
    //   не должен не включить в себя хотя бы одного ключа из тех, что были переданы
    //   ( ! ! значит должен включить все ключи )

    // если хотя бы один ключ не входит в массив ---> тогда TRUE
    
    // если все ключи входят в массив ----> ТОГДА FALSE
    
//   })
//   console.log(add_tovar)
//   if (!add_tovar) { // И ЕСЛИ не false, т.е. TRUE -->  тогда товар прошел проверку 
//     // всех изъятых ключей на соответствие содержания (includes) таких данных в массивe 
//     console.log("tovar push");
//     return arr_tovarov.push(ed_tovara); // и тогда добавить товар с такими ключами в уже имеющийся массив
//   } else throw "не соответсвует"; // и если  ---> 
// }
// add_ed_tovara({ name: "boots", size: 39, price: 100});
// console.log(arr_tovarov)  

