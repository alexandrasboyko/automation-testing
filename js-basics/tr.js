const readline = require("readline");

const rll = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rll.question("ВВедите число",(a, b) =>{

let x= a+b < 4 ? ("malo") : ("mnogo"); 
console.log("x=",x)

rll.close()
})
//if (a + b < 4) {
  //result = 'Мало';
//} else {
  //result = 'Много';
//}
