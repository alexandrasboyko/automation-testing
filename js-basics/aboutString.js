string="DAY Dana"
console.log(string[string.length-1])
console.log(string[string.length-1].toLowerCase())
console.log(string.lastIndexOf("a"))
console.log(string.includes("D", 5))

let //a="ldsk_ViAgra",
b="xrvrt"
function spam (str){
    let str1;
    str1=str.toLowerCase()
    str1.includes("viagra") || str1.includes("xxx")
      ? console.log("bannad")
      : console.log("open");   
}
spam(b)

value="$120"
function chekNum (str){
    let newchar=""
for (let char of str)
{ 
    
 if ( isNaN(char) ) continue;
     newchar=newchar+char
     
 }
 console.log(+newchar)}
 chekNum(value)


 function random(min,max){
      Math.round((min*max)*2)
 }

__________________________ 

function cheksent (pred, path) { 
    
    if (pred.includes(path)){

        for (let i=0; i<pred.length; i++) {
            let new_pos="";
            new_pos=pred.indexOf(path, i)
            console.log(new_pos)
            i=new_pos+i
            
    }   
}
}
cheksent ("my Word in World", "Wor")




function extractCurrencyValue(str) {
    console.log(+str.slice(1))}
    extractCurrencyValue(value)

function truncate(str, maxlength) {
     (str.length > maxlength) ?
      console.log(str.slice(0, maxlength - 1) + '…') : str;
}
truncate("hello", 7)
console.log()

