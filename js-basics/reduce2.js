const store= {
    "dress": [{price:0},{price:10}, {price:20}, {price:30}],
    "jeans": [{price:20},{price:30}, {price:40}, {price:50}]
}

function get_kassa_from_category(){
    const keys_of_store_categories = Object.keys(store)
   

    const new_obj_with_kassa_of_categories = {}
    for (category of keys_of_store_categories) {
        const money_in_category = store[category].reduce(function(kassa, ed_tovara){
            return kassa+=ed_tovara.price
        }, 0)
        new_obj_with_kassa_of_categories[category]=money_in_category
    }
    return new_obj_with_kassa_of_categories
}

function get_full_kassa_of_category (new_obj_with_kassa_of_categories){

    const categories_keys_of_new_obj = Object.keys(new_obj_with_kassa_of_categories)
    const new_obj_full_kassa = {}
    const full_kassa = categories_keys_of_new_obj.reduce(function(kassa, category){
    return kassa+=new_obj_with_kassa_of_categories[category]   
    }, 0)
    new_obj_full_kassa["full kassa"]= full_kassa
    return new_obj_full_kassa
}

const a=get_kassa_from_category()
const full = get_full_kassa_of_category(a)

console.log(a)
console.log(full)