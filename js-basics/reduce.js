// const arr_shop =[{price: 1}, {price: 2}, {price:3}, {price:4}]

// const suma = arr_shop.reduce(function(kassa, ed_tovara){
    
//     return kassa+=ed_tovara.price
// }, 1000)
// console.log("suma", suma)

const arr_of_shop = {
    "cat 1":[{price: 1}, {price: 2}, {price:3}, {price:4}],
    "cat 2":[{price: 10}, {price:20}, {price:30}, {price:40}]
}

function get_money_of_category(){
    const categories_keys = Object.keys(arr_of_shop)

    const new_obj_with_money_of_category = {}
    for (category of categories_keys){
        
        const money_in_category = arr_of_shop[category].reduce(function (kassa, ed_tovara){
            return kassa+=ed_tovara.price
        }, 0)
        console.log(new_obj_with_money_of_category[category]=money_in_category)
        new_obj_with_money_of_category[category]=money_in_category
    }
    return new_obj_with_money_of_category
         
}


function get_full_money(money_in_Categories){
    const categories_keys = Object.keys(money_in_Categories)
    const full_money = categories_keys.reduce(function(kassa, category){
        kassa +=money_in_Categories[category]
        return kassa
    }, 0)
    return full_money
}


const moneyByCategory = get_money_of_category();
console.log(moneyByCategory);
//console.log(get_full_money(moneyByCategory));







// const arr = [1,2,3,4]

// const reducer = (accumulator, current_value) => accumulator+current_value

// console.log(arr.reduce(reducer))

// console.log(arr.reduce(reducer, 5))



