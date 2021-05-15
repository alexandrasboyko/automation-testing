const shop_arr = [];
const keys = ["category", "size", "gender", "price", "discount"];

function add_ed_tovara(ed_tovara) {
  const element_tovara_keys = Object.keys(ed_tovara);
  return keys.every(function (key) {
    if (element_tovara_keys.includes(key)) 
   
      console.log("товар добавлен")
      return shop_arr.push(ed_tovara)
      
    })
}

add_ed_tovara({ category: "dress", size: "M", gender: "W", price:"500", discount:"10" });
add_ed_tovara({ category: "dress", size: "S", gender: "W", price:"1000", discount:"5" });
add_ed_tovara({ category: "jacket", size: "XL", gender: "M", price:"1500", discount:"15" });
add_ed_tovara({ category: "skirt", size: "L", gender: "W"});

function find_ed_tovara(ed_tovara) {
  const element_tovara_keys = Object.keys(ed_tovara);
  

  const new_sort = shop_arr.filter(function (search_ed_tovara) {
    return element_tovara_keys.every(function (key) {
      return ed_tovara[key] === search_ed_tovara[key];
    });
  });
  
  if (new_sort.length===1){
      return new_sort[0].price=new_sort[0].price-(new_sort.price*new_sort[0].discount||5/100)
  }
  if (new_sort.length > 0) return new_sort;
  else console.log("товар не найден");

}

// function new_price (new_sort){
// const keys_of_new_sort = Object.keys(new_sort)
// console.log("keys of -> ", keys_of_new_sort)

//   const new_price = arr_shop.sort(function(ed_tovara){
//       return keys_of_new_sort.every(function (key) {
          
//   if (key === 'price' && ed_tovara[key]>1000) {
//     const price_with_discount = [key]-(price*discount/100)
   
//      return price_with_discount}  
//   })
//   return new_price
  
// }
console.log(find_ed_tovara({ category: "skirt", size: "L", gender: "W" }));
console.log(find_ed_tovara({ category: "dress" }))

// console.log(new_price({ category: "dress", size: "S", gender: "W", price:"1000", discount: '10'}))
