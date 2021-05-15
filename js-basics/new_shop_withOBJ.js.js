const shop = {};
let kassa = 0;

function add_ed_tovara(expected_ed_tovara) {
  const { category = "noCategory", ...rest } = expected_ed_tovara;
  if (shop[category] === undefined) {
    shop[category] = [];
  }
  shop[category].push(rest);
}

function find_ed_tovara(ed_tovara_forChek) {
  const {category, ...rest } = ed_tovara_forChek;

  console.log(category)
  const keys = Object.keys(rest);

  const cheked_ed_tovara = shop[category].find(function (ed_tovara_inCategory) {
    return keys.every(function (key) {
      ed_tovara_inCategory[key] === ed_tovara_forChek[key];
    });
  });
  const index = shop[category].findIndex(function (ed_tovara) {
    ed_tovara === cheked_ed_tovara;
  });

  const founded_ed_tovara = shop[category].splice(index, 1)[0];
  console.log("founded_ed_tovara => ", founded_ed_tovara)
  return {
    sell: function () {
      const { price, ...rest } = founded_ed_tovara;
      kassa += price;
      return rest;
    },

    show: function () {
      return founded_ed_tovara;
    },
    back_to_shop: function () {
      add_ed_tovara({ category, ...founded_ed_tovara });
    },
  };
}
add_ed_tovara({ name: "Skirt", price: 1000, size: "L" });
add_ed_tovara({ name: "T-Short", price: 1000, size: "M" });
// console.log("shop before ", shop);

// console.log(
//   find_ed_tovara({ name: "Skirt", price: 1000, category: "woman", size: "Xs" })
// );
// console.log("shop after", shop);

add_ed_tovara({
    name: "Skirt-skotch",
    price: 1000,
    size: "L",
    category: "man",
  });
  add_ed_tovara({
    name: "Skirt",
    price: 1000,
    category: "woman",
    size: "M",
  });
  add_ed_tovara({
    name: "Skirt",
    price: 1000,
    category: "woman",
    size: "Xs",
  });

const result = find_ed_tovara({
  name: "Skirt",
  price: 1000,
  category: "woman",
  size: "Xs",
});
console.log(result.show());
console.log(shop);
console.log(result.back_to_shop());
console.log(shop);



