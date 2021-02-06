const arr_sklad_tovarov = [];
let counter=0;

let discount=15;
let cena_with_discount;


function add_ed (ed_tovara) {

   return arr_sklad_tovarov.push (ed_tovara)
}

function find_ed(nazvan, price) {
  const index_of_ed_tovara = arr_sklad_tovarov.findIndex (function (ed_tovara) {
    if (nazvan && price)
      return ed_tovara.name === nazvan && ed_tovara.price === price;
    else if (nazvan) return ed_tovara.name === nazvan;
  });

  if (index_of_ed_tovara == -1) return "товар не найден";
  const ed_tovara_dlya_prod = arr_sklad_tovarov.splice(
    index_of_ed_tovara,1)[0];

  function skidka(nazvan) {
    const nalichie_same_tovara_na_sklade = arr_sklad_tovarov.some(function (
      ed_tovara
    ) {
      return nazvan === ed_tovara.name;
    });
    if (!nalichie_same_tovara_na_sklade) {
      cena_with_discount =
        ed_tovara_dlya_prod.price -
        (ed_tovara_dlya_prod.price / 100) * discount;
      console.log("цена со скидкой: ", cena_with_discount);
      return cena_with_discount;
    } else {
      console.log("цена без скидки: ");
      return ed_tovara_dlya_prod.price;
    }
  }
  ed_tovara_dlya_prod.price = skidka(ed_tovara_dlya_prod.name);
  counter += ed_tovara_dlya_prod.price;
  console.log("касса = ", counter);
  console.log(" единица товара для продажи: ");
  return ed_tovara_dlya_prod;
}
    

function show_ostatok_ed () {
console.log(" остаток товаров: ")
return Array.from(arr_sklad_tovarov)

}

console.log(add_ed({ name: "jeans", price: 21 }));
console.log(add_ed({ name: "coat", price: 24 }));

console.log(add_ed({ name: "coat", price: 24 }));
console.log(find_ed("jeans"));
console.log(find_ed("coat"));

console.log(show_ostatok_ed());


