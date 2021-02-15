

const arr_shop = [];
/**
 *
 * @param {object} item товар
 * @param {string} item.name товар
 * @param {number} item.price цена
 * @param {string} item.size размер
 * @param {string} [item.category] категория
 */

const tovar_properties = ["PLUSize","size", "name", "price"];

function add_new_tovar(ed_tovara) {
  const keys = Object.keys(ed_tovara);
  //
  // [name, price, size] === [size, price, name]
  return keys.some(function (key){
  if (! tovar_properties.includes(key)) {
    console.log("товар не добавлен")}
    else { console.log('товар добавлен')
    return arr_shop.push(ed_tovara)
  }
  })
}
function find_tovar(ed_tovara) {
    const keys = Object.keys (ed_tovara)
                           //[name, size, price]
    const find_ed_tovara = arr_shop.find(function(el_tovara){
       return keys.every(function (key){
        //    console.log(ed_tovara[key])
        //    console.log(el_tovara[key])
        //    console.log(ed_tovara[key ]===el_tovara[key])
          return ed_tovara[key]===ed_tovara[key]
       }) 
        // {name : "", size: ""}{}{}
    })
    if (find_ed_tovara) { console.log(find_ed_tovara) ; return ( find_ed_tovara)
    }
    else { 'товар не найден'}
}

function find_category (category){
    
}

    


    

// }
//add_new_tovar({ size: "XL", price: 1000, name: "Dress" });
add_new_tovar({ PLUSize: "XL", price: 1000, name: "Dress" });
// add_new_tovar({ size: "M", price: 1000, name: "T-Short" }),
//   add_new_tovar({ size: "L", price: 1000, nameS: "Cap" });
// // add_new_tovar({ size: "L", price: 1000, name: "T-Short" }),
// // add_new_tovar({ size: "L", price: 1000, name: "Cap" });
// console.log(arr_shop);
//console.log(find_tovar({name:"Dress", price:1000}));
console.log(find_category({PLUSize}))

//console.log(find_tovarS({ size: "L", price: 1000 }));
