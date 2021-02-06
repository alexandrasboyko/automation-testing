const obj_from_store = []; //создаем пустой массив

function add_obj(item) { //функция добавления элемента т.е. нового {} в массив, т.к это массив, то у него должно(ы)
// быть ключ и значение, дальше  
  if (!item.name || !item.price) throw new Error('Nety'); //проверяем чтоб то, 
  // что было введено являлось значением name и price нового объекта т.е элемента массива
  obj_from_store.push(item); // после успешной проверки добавляем новый объект{} элемент массива 
}

function find_obj_from_store(name, price) { // передаем в функцию значения объекта 
  const item_index = obj_from_store.findIndex(function (item) { // для каждого элемента массива выполнить проверку, 
    // проверить элемент, а он же {}, если name и price, (т.е. те значения, что мы передали в функцию) будут True,
    // т.е. они такие есть в массиве как были переданы, т.е то значение, что было передано,
    // равно такому же значению объекта, тогда возвращаем true для этого объекта, 
    // тогда Find_Index вернет индекс для этого True {} объекта 
    if(name && price) return item.name === name && item.price === price; 
    return item.name === name 
  }); // возвращаем индекс только для item.name, если был введен только один аргумент


  if (item_index === -1) {
    return "товар не найден";
  } 
  return obj_from_store.splice(item_index, 1)[0]; // вернуть значение элемента объекта 
}

function array_obj() {
  return Array.from(obj_from_store); //создать новый массив из уже существующего
}

module.exports = {
  add_obj,
  find_obj_from_store,
  array_obj,
};


