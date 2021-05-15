

// function test(item) {
//     console.log(item)
// }

// const category = 'test'


// const obj = {a: 2, b:3};
    


// const newObj = {
//     category: category,
// }

// Object.keys(obj).forEach((key) => {
//     newObj[key] = obj[key]
// })

// test(
//    newObj
//     )


// const founded_tovar = {
//     name:"dress",
//     price:1000,
//     size: "M"
// }
// const categ = "Woman"

// function back_tovar (){
// return {categ,...founded_tovar}
// }

// console.log(back_tovar(founded_tovar))


 
// const founded_ed_tovara = {
//     name:"sweater",
//     price:1000,
//     size:"L"
// }
// const season = "winter"

// function back_ed_tovar (founded_ed_tovara){
//     return {season, ...founded_ed_tovara}
// }
// console.log(back_ed_tovar(founded_ed_tovara))

const ed_tovara = {
    price:1000,
    size:"L"
}

const {category="sweater", ... rest} = ed_tovara

const sec = 'winter'

function new_ed (ed) {
return {category, ...sec}
}
console.log(new_ed(ed_tovara))