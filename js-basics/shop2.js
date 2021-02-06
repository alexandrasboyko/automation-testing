const store = require('./shop')
 

console.log(store)
store.add_obj({ names:100, price: "vv"})
console.log(store.find_obj_from_store("kepka", 100))
console.log(store.array_obj())


