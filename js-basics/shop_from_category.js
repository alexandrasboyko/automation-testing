const shop = {};
let kassa = 0;
const tovar_properties = ["name", "price", "size"];


function add_ed_tovara(ed_tovara) {
  const keys_of_ed_tovara = Object.keys(ed_tovara);

  return tovar_properties.every(
      function (key) {
    if (keys_of_ed_tovara.includes(key)) {
     
        const { shop [category] = "NoCategory", ...rest } = ed_tovara;

      if (category === undefined) {
        shop[category] = [];
      }

      console.log("товар добавлен",category);
      return shop[category]    .push(rest);

    }
  }
  );
}

function find_ed_tovara(ed_tovara) {
  const { category, ...rest } = ed_tovara;
  const keys = Object.keys(ed_tovara);
  const cheked_ed_tovara = shop[category].find(function (
    ed_tovara_fromCategory
  ) {
    return keys.every(function (key) {
      ed_tovara[key] === ed_tovara_fromCategory[key];
    });
  });
  let index = shop[category].findIndex(function (ed_tovara_inCategory) {
    ed_tovara_fromCategory === cheked_ed_tovara;
  });
  const founded_ed_tovara = shop[category].splice(index, 1)[0];
  return {
    show: function () {
      return founded_ed_tovara;
    },
    sell: function () {
      const { price, ...rest } = founded_ed_tovara;
      kassa += kassa;
      return rest;
    },
    back_to_shop: function () {
      add_ed_tovara({ category, ...founded_ed_tovara });
    },
  };
}
function discount(founded_ed_tovara) {
  if (founded_ed_tovara.lenght === 1) {
    return (founded_ed_tovara.price = price - (price * discount || 5 / 100));
  }
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
