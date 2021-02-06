const arr = []


function add (item) {
if (!item.name || !item.price) return false;
 return arr.push(item)   
}

function get (name, price) {
    const new_obj = arr.findIndex(function (item) {
        if (name && price){ return item.name === name && item.price === price}
        else if (name) return item.name
     });
     if (new_obj ==-1) { return "not found"}
    return arr.splice(new_obj, 1)[0]
}

function show () {
    return Array.from(arr)
}

console.log(add({name:"jeans", price: "21"}))
console.log(add({name:"coat", price:"24"}))
console.log(get("jeans"))
console.log(show())

