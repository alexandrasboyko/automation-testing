// // const array = [key1, key2, key3]
// // const new_a = array.every(function (key) {
// // key===key1

// // })

// const obj_arr = {
// noCategory:[]
// }

// function add_obj(ed_obj){
//     const {category, ...rest}=ed_obj
//     if (obj_arr===
//     if(obj_arr[category]===undefined){
//         obj_arr[category] = []
//     } 
//     obj_arr[category].push(rest)

// }

// console.log(add_obj({category:"dress", name:"amanda", size:'L'}))
// console.log(add_obj({name:"joli", size:'M'}))
// console.log(add_obj({category:"skirt", name:"amanda", size:'S'}))

const roz = {
    name:"joli", size:'M'
}
const roz1={
    category:"skirt",
     name:"amanda", 
     size:'S'    
}

function a (ed){
const {category='noCat', ...rest} = ed
return category
}
console.log(a(roz))
console.log(a(roz1))

