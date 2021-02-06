const sklad_tovarov = [];
let counter = 0;
discount = 15;
let cena_so_skidkoy;

function add_tovar(edz_tovar) { // добавить новый товар на склад
  return sklad_tovarov.push(edz_tovar);
}

function find_tovar(nazvan, price) { // найти товар, при введеном названии и прайсе,
  const index_edz_tovara = sklad_tovarov.findIndex(function (edz_tovar) { //edz_tovar это объект из массива 
    //с полями и значениями
    if (nazvan && price)  // у которого при проверке на соответствие того товара, что был введен в nazvan и price
    // и того {} со значениями, что уже имеется, --> будут ли совпадать их значения "имя и прайс"
      return edz_tovar.name === nazvan && edz_tovar.price === price;
    //если TRUE, т.е значения вводимые и значения уже существующего {} совпадут 
    // то тогда будет найден индекс для true-шной единицы товара
    else if (nazvan) return edz_tovar.name === nazvan;
  });

  if (index_edz_tovara == -1) return "not found"; //если значения не совпадут, тогда FindIndex вернет -1 

  const ed_tovara_dlya_prod = sklad_tovarov.splice(index_edz_tovara, 1)[0];// вырезаем из существующего массива
        // одну единицу товара из соответвующим индексом True-шного {} и добавляем в новый,
        // и вызываем новый массив [0] отобразить этот элемент-товар

  function skidka(name_ed_dlya_prod) { // проверить наличие остатка элементов массива на то, 
        // есть ли еще такой же элемент на складе
    const nalichie_ostatka_same_edz = sklad_tovarov.some(function (edz_tovar) { // проверяем каждый 
        // {} элемент-товар из массива на соответствие значению имени {} К тому введенному, 
        // заданому (в аргументе) названию 
      return name_ed_dlya_prod === edz_tovar.name;
    });

    if (!nalichie_ostatka_same_edz) { //если {} с таким же именем не было найдено, 
        //тогда посчитать его со скидкой
      cena_so_skidkoy = ed_tovara_dlya_prod.price - ( ed_tovara_dlya_prod.price / 100 ) * discount;
      console.log("цена ед.товара со скидкой = ", cena_so_skidkoy );
      return cena_so_skidkoy;
    } else {
      console.log("товар без скидки ");
      return ed_tovara_dlya_prod.price;
    }
  }

  ed_tovara_dlya_prod.price = skidka(ed_tovara_dlya_prod.name); // взаимосвязь между полями функции, 
  //в прайс присваивается значение, которое вернет функция, а именно цена с учетом скидки или без
  counter += ed_tovara_dlya_prod.price; //счетчик кассы
  console.log("касса = ", counter);
  console.log("продажа единицы товара :")
  return ed_tovara_dlya_prod  //единица товара, что была продана
}

function show_ostatok_tovarov() {
  console.log("остаток товаров: ");
  return Array.from(sklad_tovarov);
}

console.log(add_tovar({ name: "jeans", price: 21 }));
console.log(add_tovar({ name: "coat", price: 24 }));

console.log(add_tovar({ name: "coat", price: 24 }));
console.log(find_tovar("jeans"));
console.log(find_tovar("coat"));

console.log(show_ostatok_tovarov());
