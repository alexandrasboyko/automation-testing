const shop = {
 
};
const kassa = 0;
const required_properties = ["price", "size", "season"];

function chek_properties(entered_ed_tovara) {
  const keys_of_entered_ed_tovara = Object.keys(entered_ed_tovara);
  const cheked_ed_tovara = required_properties.every(function (property_in_required_properties) {
    return keys_of_entered_ed_tovara.includes(property_in_required_properties);
  });
  if (cheked_ed_tovara) {
    const {category="noCategory",...rest}=entered_ed_tovara
    if (shop[category] === undefined){
        shop[category] = [];  
    }
    shop[category].push(rest)
    }
  console.log("cheked_ed_tovara -> ", cheked_ed_tovara);
 // return cheked_ed_tovara;
}

chek_properties({
  category: "dress",
  price: 1000,
  size: "M",
  season: "summer",
});
console.log(shop);

function add_tovar_to_the_Category(ed_tovara) {
  const { category, ...rest } = ed_tovara;

  if (category === undefined) {
    shop.noCategory.push(rest);
  } else if (category === shop[category]) {
    shop[category].push(rest);
  } else shop[category] = [];
  shop[category].push(rest);
 }


function add_ed_tovara(ed_tovara){
const {category="noCategory",...rest}=ed_tovara
if (shop[category] === undefined){
    shop[category] = [];
    
}
shop[category].push(rest)
}

add_tovar_to_the_Category({
  category: "sweater",
  price: 2000,
  size: "S",
  season: "winter",
});
console.log("1", shop);

add_tovar_to_the_Category({
  price: 3000,
  size: "L",
  season: "spring",
});
console.log("2", shop);

add_tovar_to_the_Category({
    category: "sweater",
    price: 4000,
    size: "M",
    season: "winter"
  });
  console.log("1 и 3", shop);
