const arr_of_clos = [];

const arr_properties = ['name', 'size', 'price'];

function add_ed_tovara (ed_tovara){
    const ed_tovara_keys = Object.keys(ed_tovara)

    const new_ed_tovara = ed_tovara_keys.some(function (key){
     return !arr_properties.includes(key)
    })
    if (!new_ed_tovara) {
     console.log("товар добавлен");
     return arr_of_clos.push(ed_tovara)}
     else throw new Error `свойство не состветсвует допустимым`
}

function find_ed_tovara (ed_tovara){
    const keys = Object.keys(ed_tovara)

    const find_tovar = arr_of_clos.find(function(el_tovar)
    {
        return keys.every(function (key){
          return ed_tovara[key]===el_tovar[key]
        })
    }) 
    
    if (find_tovar) return find_tovar
    else return (`товар не найден`)
    }

function find_tovarS(tovarS) {

    const keys = Object.keys(tovarS)
    const find_tovarS = arr_of_clos.filter(function(el_tovara){
       return keys.every(function(key){
        return el_tovara[key]===tovarS[key]
        })
    })
    if (find_tovarS) return find_tovarS
    else return `Товары не найдены`
}

  add_ed_tovara ({ size: "XL", price: 1000, name: "Dress" }),
  add_ed_tovara({ size: "M", price: 1000, name: "T-Short" }),
  add_ed_tovara({ size: "L", price: 1000, name: "T-Short" }),
  add_ed_tovara({ size: "L", price: 1000, name: "Cap" });
  
console.log(find_ed_tovara({name:'T-Short'}));

console.log(find_tovarS({ size: "L", price: 1000 }));

add_ed_tovara({ size: "L", price: 1000, nameS: "Cap" });


