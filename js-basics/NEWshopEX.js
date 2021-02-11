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
function findItem(searchData) {              //  поиск по переданным данным частичным какого-то товара, 
                                             //если параметры поиска совпадают для двух или больше {}-в, 
                                             //то тогда отобразится первый из этих {}-в в списке

  // searchData = {size: 'XL', price: 1000}
  // searchDataKeys = ['size', 'price']
  const searchDataKeys = Object.keys(searchData);  // выделяем ключи из переданного {} 
                                                  // и записываем их в новый массив, и 
                                                  // присваем этот массив с ключами в константу

  const tovar = storeItems.find(function (item) {    // в существующем массиве мы ищем первый элемент, который
                                                    // вернет TRUE,  при проверке каждого {}-кта
                                                    // существующего в [массиве c объектами] 

                                                    // для осуществления проверки для каждого {}
                                                    // мы берем тот массив,
                                                    // в котором содержаться ключи 
                                                    // что мы изъяли из
                                                    // тех данных, которые передавали(вводили) и
                                                    // вызываем функцию, которая примет эти элементы, эти ключи, 
                                              // и проверит для каждого ключа соответствует ли этот ключ такому же 
                                                    // ключу из массива уже существующих {}{}{}-в
                                                
                                                    
    // item = {size: 'XL', price: 1000, name: 'Dress'}    | iteration first
    // item = {size: 'XL', price: 1000, name: 'T-Short'}  | iteration second

    return searchDataKeys.every(function (key) {   // searchDataKeys = ['size', 'price'], ключи, что мы изъяли из
                                                  // тех, данных, которые передавали(вводили)

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
    const searchDataKeys = Object.keys(searchData);  // выделяем ключи, что были изъяты из тех данных, 
                                                     // что были введены 
                                                    
  
    const tovar = storeItems.filter(function (item) {            // константе присвоить новый массив из элементов, 
                                                                //которые прошли проверку, который 
                                                               // вернет filter.
                                                              // проверяем на true-шность каждый элемент
                                                             // в существующем массиве [..{},{}] 
                                                             
                                                            

      // item = {size: 'XL', price: 1000, name: 'Dress'}    | iteration first
      // item = {size: 'XL', price: 1000, name: 'T-Short'}  | iteration second

      return searchDataKeys.every(function (key) {           // вернуть значение, массив с ключами 
                                                            // (которые были изъяты) 
                                                           // для каждого ключа элемента {} этого массива
                                                          // пройти проверку на соответствие этого же ключа
                                                         // и ключа {}[],
                                                        // который есть уже в существующем массиве [{},{},{}]
                                                       // с помощью функции every выделить каждый элемент из массива
                                                      // пройти по каждому элементу массива
        // key = 'size'  |iteration first
        // key = 'price' |iteration second
  
        // {size: 'XL', price: 1000, name: 'Dress'}['size'] = 'XL'
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

