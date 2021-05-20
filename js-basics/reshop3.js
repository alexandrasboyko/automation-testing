const shop = {};
let kassa ;
const required_tovar_properties = ["size", "price", "name"];

function add_ed_tovara(entered_ed_tovara) {
  const keys_of_entered_ed_tovara = Object.keys(entered_ed_tovara);
  const cheked_keys_of_ed_tovara = required_tovar_properties.every(function (
    key
  ) {
    return keys_of_entered_ed_tovara.includes(key);
  });
  if (cheked_keys_of_ed_tovara) {
    const { category = "noCategory", ...rest } = entered_ed_tovara;
    if (shop[category] === undefined) {
      shop[category] = [];
    }
    shop[category].push(rest);
  }

  console.log(cheked_keys_of_ed_tovara, "товар добавлен");
}

add_ed_tovara({ category: "dress", size: "L", price: "1000", name: "Monro" });
  add_ed_tovara({
    category: "dress",
    size: "M",
    price: "2000",
    name: "Jane",
  })

// console.log(shop);

function find_ed_tovara(entered_ed_tovara) {
  const { category, ...rest } = entered_ed_tovara;

  const keys_of_entered_ed_tovara = Object.keys(rest);

  const founded_ed_tovara = shop[category].find(function (
    ed_tovara_inCategory
  ) {
    return keys_of_entered_ed_tovara.every(function (key) {
      ed_tovara_inCategory[key] === entered_ed_tovara[key];
    });
  });

  const index_of_founded_ed_tovara = shop[category].findIndex(function (
    ed_tovara_for_index
  ) {
    // console.log("ed_tovara_for_index", ed_tovara_for_index);
    // console.log("founded_ed_tovara", founded_ed_tovara);
    return (
      ed_tovara_for_index === founded_ed_tovara && ed_tovara_for_index !== -1
    );
  });
  const get_ed_tovara = shop[category].splice(index_of_founded_ed_tovara, 1)[0];
  return {
    show: function () {
      return get_ed_tovara;
    },

    sell: function () {
      const { price, ...rest } = get_ed_tovara;
      kassa += price;
      console.log("kassa = ", kassa);
      return rest;
    },

    back_to_the_shop: function () {
      add_ed_tovara({ category, ...get_ed_tovara });
      console.log("обратно на склад");
    },
  };
}

// function find_tovars_by_category(category) {

//   return shop[category]
// }

// console.log(find_tovars_by_category( "dress" ))

function chek_kassa(category){

    const chek = shop[category].sort(function(ed_tovara){

        const {price,...rest} = ed_tovara
        
        kassa=kassa+price
        console.log("kassa", kassa)
        return kassa
    })
      return chek
    }

console.log(chek_kassa("dress"))


//     console.log(
//     find_ed_tovara({
//     category: "sweather",
//     size: "M",
//     price: "2000",
//     name: "Jane",
//   })
// );

// const find = find_ed_tovara({category: "sweather",
// size: "M",
// price: "2000",
// name: "Jane",})
// // const a =find.show()

// find.back_to_the_shop(find.show())
