const store = {
  noCategory: [],
};

/**
 *
 * @param {object} item товар
 * @param {string} item.name товар
 * @param {number} item.price цена
 * @param {string} item.size размер
 * @param {string} [item.category] категория
 */
function addStoreItem(tovar) {
  // const category = item.category
//   const { category, ...restItemObj } = item;

  
  if (tovar.category === undefined) {
    console.log( tovar.category === undefined)
    store.noCategory.push(tovar);
  } else if (tovar.category === store.category) {
      
    store.category.push(tovar)
    
  } else { 
    
      store.category = [];
    
    store.category.push(tovar);
  }
}


addStoreItem({ name: "Shtany", price: 1000, size: "XS", category: "mans" });
addStoreItem({ name: "Shtany", price: 1000, size: "XL", category: "mans" });
addStoreItem({ name: "Dress", price: 1500, size: "XS", category: "women" });
addStoreItem({ name: "Dress", price: 1500, size: "M", category: "women" });
addStoreItem({ name: "Dress", price: 1500, size: "XL", category: "women" });

// function add_store_tovar_in_category(tovar) {
//   const tovcat = tovar.category;
//   if (tovcat === undefined) {
//     store.noCategory.push(tovar);
//   } else if (tovcat === category) {
//     store.Category = [];
//     store.Category.push(tovar);
//   }
// }

/**
 *
 * @param {string} category
 * @returns {object[]} result
 */
function getStoreItemsByCategory(category) {
    console.log("get")
  return store[category];
}

addStoreItem({ name: "Shtany", price: 1000, size: "L" });
addStoreItem({ name: "Shtany", price: 1000, size: "XL" });

// addStoreItem({ name: "Shtany", price: 1000, size: "M", category: "mans" });
// addStoreItem({ name: "Shtany", price: 1000, size: "S", category: "mans" });
// addStoreItem({ name: "Dress", price: 1500, size: "S", category: "women" });
// addStoreItem({ name: "Dress", price: 1500, size: "M", category: "women" });
// addStoreItem({ name: "Dress", price: 1500, size: "L", category: "women" });

// const womenGoods = getStoreItemsByCategory("women");
// console.log(womenGoods);



