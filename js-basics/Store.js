const store ={
    noCategory:[]
}
function add_sort_tovar(obj) {
    const {category, ... all_ost } = obj

    if ( category === undefined) {
        store.noCategory.push(all_ost)
    }
    else if (store[category]){
        
        store[category].push(all_ost)
    }
    else 
    {
        store[category] = [];
    
        store[category].push(all_ost)
    }}
function get_tovarS (category) {
    return store[category]
}



console.log(add_sort_tovar({ name: "Shtany", price: 1000, size: "L" }));
console.log(add_sort_tovar({ name: "Shtany", price: 1000, size: "XL" }));

console.log(add_sort_tovar({ name: "Shtany", price: 1000, size: "S", category: "mans" }))
// console.log(
//   (add_sort_tovar({ name: "Shtany", price: 1000, size: "M", category: "mans" })
// )
console.log(add_sort_tovar({ name: "Dress", price: 1500, size: "S", category: "women" }));
console.log(add_sort_tovar({ name: "Dress", price: 1500, size: "M", category: "women" }));
console.log(add_sort_tovar({ name: "Dress", price: 1500, size: "L", category: "women" }));

console.log(get_tovarS("women"));
