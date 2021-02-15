const shopTovar_arr = [];

const permit_properties = ["name", "size", "price"];

function add_ed_tovara(ed_tovara) {
  const keys = Object.keys(ed_tovara);

  const tovar = keys.some(function (key) {
    return !permit_properties.includes(key);
  });

  if (!tovar) {
    console.log("товар добавлен");
    return shopTovar_arr.push(add_ed_tovara);
  } else return "товар не добавлен";
}

function find_tovar(ed_tovara) {
  const keys = Object.keys(ed_tovara);

  const find_tovar = shopTovar_arr.find(function (tovar) {
    return keys.every(function (key) {
      return tovar[key] === ed_tovara[key];
    });
  });
  if (find_tovar) return find_tovar;
  else return "товар не найден";
}

function find_tovarS(ed_tovara) {
  const keys = Object.keys(ed_tovara);

  const find_tovars = shopTovar_arr.filter(function (tovar) {
    return keys.every(function (key) {
      return ed_tovara[key] === tovar[key];
    });
  });
  if (find_tovars) return find_tovars;
  else return "товар не найден";
}

add_ed_tovara({ size: "XL", price: 1000, name: "Dress" }),
  add_ed_tovara({ size: "M", price: 1000, name: "T-Short" }),
  add_ed_tovara({ size: "L", price: 1000, name: "T-Short" }),
  add_ed_tovara({ size: "L", price: 1000, name: "Cap" });

console.log(find_tovar({ name: "T-Short" }));

console.log(find_tovarS({ size: "L", price: 1000 }));

add_ed_tovara({ size: "L", price: 1000, nameS: "Cap" });
