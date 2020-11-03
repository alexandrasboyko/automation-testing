const readline = require("readline");

const rll = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rll.question("Введите число? ", (x) => {

let mes=x>0? `1`: x<0? "-1" : x=0? "0": "значит вы ввели 0" 
    console.log("ответ", mes);
rll.close ()
})
