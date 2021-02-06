const arr_of_obj = [];

function add_new_obj(obj) {
  if (obj.name && obj.price) {
    return arr_of_obj.push(obj);
  }
}

function get_obj(name, price) {
  const obj_index = arr_of_obj.findIndex(function (obj) {
    if (name && price) {
      return obj.name === name && obj.price === price;
    } else if (name) return obj.name === name;
  });
  if (obj_index == -1) return "товар не найден";

  return arr_of_obj.splice(obj_index, 1)[0]
}

function show_obj() {
  return Array.from(arr_of_obj);
}

console.log(add_new_obj({name:"jeans", price: "21"}))
console.log(add_new_obj({name:"coat", price:"24"}))
console.log(get_obj("jeans"))
console.log(show_obj())