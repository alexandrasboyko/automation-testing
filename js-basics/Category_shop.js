const store = [];


function getStoreItemsByCategory(category) {

  return store.filter((el_store) => {
   
    return el_store.category === category
  }).map(({category, ...rest}) => {
    return rest
  })
}


function SORT_addStoreItem(item) {
  const {category, ...restItemObj} = item
  if(category === undefined) {
    store.noCategory.push(restItemObj)
  } else if(store[category]) {
    store[category].push(restItemObj)
  } else {
    store[category] = [];
    store[category].push(restItemObj)
  }
}

function getStoreItemsByCategory(category) {
  return store[category]
}

addStoreItem({name: 'Shtany', price: 1000, size: 'L'})
addStoreItem({name: 'Shtany', price: 1000, size: 'XL'})

addStoreItem({name: 'Shtany', price: 1000, size: 'M', category: 'mans'})
addStoreItem({name: 'Shtany', price: 1000, size: 'S', category: 'mans'})
addStoreItem({name: 'Dress', price: 1500, size: 'S', category: 'women'})
addStoreItem({name: 'Dress', price: 1500, size: 'M', category: 'women'})
addStoreItem({name: 'Dress', price: 1500, size: 'L', category: 'women'})

const obj = {price: 100, name: 'Test', size: 'L', article: 'Book'}
const {name, price, ...rest} = obj;
console.log(rest)

const womenGoods = getStoreItemsByCategory('women')
console.log(womenGoods)


    

