const arr_of_tovar = [];
tovar_properties = ["name", "size", "price"];

function add_new_tovar(ed_tovara) {
  const keys_of_tovar = Object.keys(ed_tovara);

  return keys_of_tovar.some(function (key) {
    if (!tovar_properties.includes(key)) {
      throw new Error(`${ed_tovara} не соответствует допустимым свойствам`);
    } else console.log('товар добавлен')
  arr_of_tovar.push(ed_tovara);
});

function find_tovar(tovar) {
  // [{name: "dress", size:"L"}]
  const tovar_Keys = Object.keys(tovar);
  //["name", "size"]

  const new_tovar = arr_of_tovar.find(function (ed_tovar) {
    //[ {name:"dress", size:"L", price:100}, {name:"dress", size:"XL", price:100},
    // {name:"dress", size:"XL", price:100} ]
    return tovar_Keys.every(function (key) {
      return ed_tovar[key] === tovar[key];
    });
  });
  if (new_tovar) return new_tovar;
  else "товар не найден";
}

function find_tovarS(tovar) {
  const keys_of_tovar = Object.keys(tovar);
  const tovarS = arr_of_tovar.filter(function (ed_tovara) {
    return keys_of_tovar.every(function (key) {
      return ed_tovara[key] === tovar[key];
    });
  });
  if (tovarS) return tovarS;
  else "товары не найдены";
}

add_new_tovar({ size: "XL", price: 1000, name: "Dress" }),
  add_new_tovar({ size: "ML", price: 1000, name: "T-Short" }),
  add_new_tovar({ size: "L", price: 1000, name: "T-Short" }),
  add_new_tovar({ size: "L", price: 1000, name: "Cap" });

console.log(find_tovarS({ size: "L", price: 1000 }));

add_new_tovar({ size: "L", price: 1000, nameS: "Cap" });
