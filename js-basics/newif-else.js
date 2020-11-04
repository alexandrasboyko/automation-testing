

const { create } = require("domain");
const { stdin, stdout } = require("process");
const readline=require("readline")
const rll=readline.createInterface({
    input:stdin,
    output:stdout,
});

rll.question("Введите логин = ", login => {

let s=login=="Сотрудник"? "Привет": login=="Директор" ? "Здравствуйте" : "нет логина" ;
console.log("ответ = ", s),
rll.close()
})
