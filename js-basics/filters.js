const shop = {};

function add_new_edTovara(ed_tovara) {
  const { category = "NoCategory", ...rest } = ed_tovara;

  if (shop[category] === undefined) {
    shop[category] = [];
  }
  shop[category].push(rest);
}

function find_ed_tovara(ed_tovara) {
    
  const { category, ...rest } = ed_tovara;

  const keys = Object.keys(rest);

  const chek_ed_tovara = shop[category].find(function (ed_of_shop) {
    return keys.every(function (key) {
      return ed_tovara[key] === ed_of_shop[key];
    });
  });

  //   if (chek_ed_tovara) return chek_ed_tovara;
  //   else console.log("товар не найден");

  let index = shop[category].findIndex(function (ed_tovara) {
    if (ed_tovara === chek_ed_tovara) return chek_ed_tovara;
  });
  const new_ar = shop[category].splice(index, 1);
  console.log("new_array = ") ;
  return new_ar;
}

//  shop[category].splice(index, 1)
//  return shop[category].splice(chek_ed_tovara)
//   }
//   else console.log('товар не найден')

add_new_edTovara({ name: "Shtany", price: 1000, size: "L", category: "man" });
add_new_edTovara({
  name: "Shtany",
  price: 1000,
  category: "woman",
  size: "Xxs",
});
add_new_edTovara({
  name: "Shtany",
  price: 1000,
  category: "woman",
  size: "Xs",
});
add_new_edTovara({ name: "Shtany", price: 1000, size: "L" });
add_new_edTovara({ name: "T-Short", price: 1000, size: "M" });
console.log("shop before ", shop);

console.log(
  find_ed_tovara({ name: "Shtany", price: 1000, category: "woman", size: "Xs" })
);
console.log("shop after", shop)

// find_ed_tovara({ name: "Shtany", price: 1000, size: "S", category: "man" });
// find_ed_tovara({ name: "Dress", price: 1500, size: "S", category: "women" });
// find_ed_tovara({ name: "Dress", price: 1500, size: "M", category: "women" });
// find_ed_tovara({ name: "Dress", price: 1500, size: "L", category: "women" });
