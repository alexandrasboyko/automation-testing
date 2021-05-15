// const arr_shop = {
//   noCategory: [],
// };

// function add_sort_tovar(el_obj) {
//   const { category, ...all_ost } = el_obj;
//   if (category === undefined) {
//     arr_shop.noCategory.push(all_ost);
//   } else if (arr_shop[category]) {
//     arr_shop[category].push(all_ost);
//   } else {
//     arr_shop[category] = [];
//     arr_shop[category].push(all_ost);
//   }
// }

// function get_tovarS_byCategory(category) {
//   return arr_shop[category];
// }
// add_sort_tovar({ name: "Shtany", price: 1000, size: "L" });
// add_sort_tovar({ name: "Shtany", price: 1000, size: "XL" });

// add_sort_tovar({ name: "Shtany", price: 1000, size: "M", category: "mans" });
// add_sort_tovar({ name: "Shtany", price: 1000, size: "S", category: "mans" });
// add_sort_tovar({ name: "Dress", price: 1500, size: "S", category: "women" });
// add_sort_tovar({ name: "Dress", price: 1500, size: "M", category: "women" });
// add_sort_tovar({ name: "Dress", price: 1500, size: "L", category: "women" });

// const womenGoods = get_tovarS_byCategory("mans");
// console.log(womenGoods);

const arr_shop = [];
const tovar_properties = ["name", "price", "size", "category"];

function add_sort_tovar(el_obj) {
  const keys_obj = Object.keys(el_obj);

  const tovar =
    tovar_properties.length === keys_obj.length &&
    keys_obj.every((key) => {
      return tovar_properties.includes(key);
    });

  if (tovar) {
    console.log("товар добавлен");
    arr_shop.push(el_obj);
  } else {
    console.log("товар не добавлен");
  }
}

function get_tovarS(category) {

    return arr_shop
      .filter(function (ed_tovara) {
        return ed_tovara.category === category;
      })
      .map(({ category, ...all }) => {
        return all;
      });
  } 


// function sort_price(price){

//     var n = arr_shop.length
//     for (let i=0; i<n-1; i++){
//         for (let j=0; j<n-1-i ; j++){
//             if (arr_shop[j+1]<arr_shop[j]) {
//             var t = arr_shop[j+1]
//             arr_shop[j+1]=arr_shop[j]
//             arr_shop[j]=t
//         }      
//     }
//     }
//     return arr_shop
//     }

// console.log(sort_price(arr_shop))

add_sort_tovar({ name: "t-short", price: 1000, size: "XL" });

add_sort_tovar({ name: "Shtany", price: 1000, size: "S", category: "mans" });
add_sort_tovar({ name: "Shtany", price: 1000, size: "M", category: "mans" });
add_sort_tovar({ name: "Dress", price: 1500, size: "S", category: "women" });
add_sort_tovar({ name: "Dress", price: 1500, plusize: "M", category: "women" });
add_sort_tovar({name: "Dress",price: 1500,size: "L",category: "women",sale: "winter",});
console.log(get_tovarS("mans"));
