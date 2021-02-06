/**
 * @typedef {object} Tovar
 * @property {string} name tovar name
 * @property {number} price tovar price
 * @property {string} [size] tovar
 * @property {number} [specialDiscount] tovar special discount
 */
const tovarProperties = ["name", "price", "size", "specialDiscount"];
/**
 * Tovar[]
 */
const storeItems = [];
// const storeItems = [];

/**
 * @param {object} param
 * @param {string} [param.name]
 * @param {number} [param.price]
 * @param {string} [param.size]
 * @return {Tovar}
 */
function findItem(searchData) {
  // searchData = {size: 'XL', price: 1000}
  // searchDataKeys = ['size', 'price']
  const searchDataKeys = Object.keys(searchData);

  const tovar = storeItems.find(function (item) {
    // item = {size: 'XL', price: 1000, name: 'Dress'}    | iteration first
    // item = {size: 'XL', price: 1000, name: 'T-Short'}  | iteration second
    return searchDataKeys.every(function (key) {
      // key = 'size'  |iteration first
      // key = 'price' |iteration second

      // {size: 'XL', price: 1000, name: 'Dress'}['size'] = 'XL
      // {size: 'XL', price: 1000}['size'] = 'XL'
      return item[key] === searchData[key];
    });
  });
  if (tovar) {
    return tovar;
  }
  return "Tovar ne naiden";
}


function findItems(searchData) {
    // searchData = {size: 'XL', price: 1000}
    // searchDataKeys = ['size', 'price']
    const searchDataKeys = Object.keys(searchData);
  
    const tovar = storeItems.filter(function (item) {
      // item = {size: 'XL', price: 1000, name: 'Dress'}    | iteration first
      // item = {size: 'XL', price: 1000, name: 'T-Short'}  | iteration second
      return searchDataKeys.every(function (key) {
        // key = 'size'  |iteration first
        // key = 'price' |iteration second
  
        // {size: 'XL', price: 1000, name: 'Dress'}['size'] = 'XL
        // {size: 'XL', price: 1000}['size'] = 'XL'
        return item[key] === searchData[key];
      });
    });
    if (tovar) {
      return tovar;
    }
    return "Tovar ne naiden";
  }
  

function addStoreItem(tovar) {
  const tovarKeys = Object.keys(tovar);

  tovarKeys.forEach(function (tovarKey) {
    if (!tovarProperties.includes(tovarKey)) {
      throw new Error(`${tovarKey} - товар не должен сожержать такое свойство`);
    }
  });

  storeItems.push(tovar);
}


module.exports = {
  addStoreItem,
  findItem,
  findItems
};

