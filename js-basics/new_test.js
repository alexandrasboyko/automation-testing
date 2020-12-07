// market names
const dream = 'dream'
const river = 'river'
const auchan = 'auchan'

const admin = ["admin_dream", "admin_river", "admin_auchan"];
const seller = ["seller_river", "seller_dream", "seller_auchan"];

const shop_group_1 = [];
const shop_group_2 = [];

// form market group

function gropToShop(collection, magazineGrop1, magazineGrop2) {
    collection.forEach(function (adminname) {
        if(adminname.includes(dream)) {
            magazineGrop1.push(adminname)
        } else if(adminname.includes(river)) {
            magazineGrop2.push(adminname)
        }
    })
}

gropToShop(admin, shop_group_1, shop_group_2)
gropToShop(seller, shop_group_1, shop_group_2)


console.log(shop_group_2, shop_group_1)
return 


/**  
 * @example 
 *  {
 *      nameOfShopComplex: string,
 *      open: string,
 *      close: string,
 *      seller: string,
 *      admin: string
 *  }
*/





// [ 'admin_river', 'seller_river' , 'River', '8:00', '21:00']
///////////////////////////////////////////////////

function shop_1(nameOfShopComplex, open, close) {
  return {
    nameOfShopComplex,
    open,
    close,
  };
}
 
function shop_2(nameOfShopComplex, open, close) {
  return {
    nameOfShopComplex,
    open,
    close,
  };
}

function sort_Shop_group(shopping_complex) {
  let item = null;
  if (admin.includes(shopping_complex)) {
    item = shop_1("River", "8:00", "21:00");
  } else if (seller.includes(shopping_complex)) {
    item = shop_2("DreamTown", "9:00", "22:00");
  } else {
    console.log("error");
    return;
  }

  console.log(item);

  group.push(item);
}

shop_group_1.forEach(sort_Shop_group)
