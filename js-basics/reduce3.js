const store = {
  cat_1: [{ price: 1 }, { price: 2 }, { price: 3 }, { price: 4 }],
  cat_2: [{ price: 10 }, { price: 20 }, { price: 30 }, { price: 40 }],
};

function get_kassa_from_each_category() {
  const category_keys_of_store = Object.keys(store);

  const new_obj_with_kassa_by_categories = {};

  category_keys_of_store.forEach(function (key_category) {

   const category_kassa = store[key_category].reduce(function (kassa, element) {
      return (kassa += element.price);
    }, 0);

    new_obj_with_kassa_by_categories[key_category] = category_kassa;
  });
  return new_obj_with_kassa_by_categories;
}
const a = get_kassa_from_each_category();
console.log(a);

// function get_full_money (){
//     const
// }


