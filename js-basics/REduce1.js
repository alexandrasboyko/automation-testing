const store = {
    "cat_1":[{price: 1}, {price: 2}, {price:3}, {price:4}],
    "cat_2":[{price: 10}, {price:20}, {price:30}, {price:40}]
}

function get_money_from_category(){
    const keys_categories_of_store = Object.keys(store) 

    const new_obj_with_money_of_category = {}

    for (category of keys_categories_of_store) {
        const money_of_category = store[category].reduce(function(kassa, ed_tovara){
            return kassa+=ed_tovara.price
        }, 0)
        new_obj_with_money_of_category[category]=money_of_category
    }
    return new_obj_with_money_of_category

}

function get_full_money(money_obj){
const keys_of_money_obj = Object.keys(money_obj)

const all_money = keys_of_money_obj.reduce(function (kassa, category){
return kassa+=money_obj[category]
}, 0)
return all_money
}


const a = get_money_from_category()
 const b =get_full_money(a)
 console.log(a)
 console.log(b)
