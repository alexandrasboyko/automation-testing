const shop = {
    noCategory:[]
};
let kassa=0;

function add_ed_tovara(ed_tovara) {
  const {category, ...rest} = ed_tovara;
  if (shop[category] === undefined) {
    shop[category] = [];
  }
  shop[category].push(rest);
}

function find_ed_tovara(ed_tovara) {
  const { category, ...rest } = ed_tovara;
  const keys = Object.keys(rest);
  const chek_ed_tovara = shop[category].find(function (ed_tovara_fromCategory) {
    return keys.every(function (key) {
      ed_tovara[key] === ed_tovara_fromCategory[key];
    });
  });

  let index = shop[category].findIndex(function (indexOf_ed_tovara) {
    return ((indexOf_ed_tovara = chek_ed_tovara));
  });

  const founded_tovar = shop[category].splice(index, 1)[0];

  return {
    sell: function () {
        const {price, ...rest} = founded_tovar
        kassa+=price
        return rest

    },
    show: function () {
      return founded_tovar;
    },
    back_to_shop: function () {
       add_ed_tovara({category, ...founded_tovar})
    },
  };
}

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
add_ed_tovara({ name: "Skirt", price: 1000, size: "L" });
add_ed_tovara({ name: "T-Short", price: 1000, size: "M" });
// console.log("shop before ", shop);

// console.log(
//   find_ed_tovara({ name: "Skirt", price: 1000, category: "woman", size: "Xs" })
// );
// console.log("shop after", shop);

const result = find_ed_tovara({ name: "Skirt", price: 1000, category: "woman", size: "Xs" })
console.log(result.show())
console.log(shop)
console.log(result.back_to_shop())
console.log(shop)

