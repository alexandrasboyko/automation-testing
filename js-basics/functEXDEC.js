
declar(7)

function declar (){
console.log("declar")
}
 declar(3)


 
 if (true){
    function  expres (){
    console.log("espres")
 }}
 expres()

let ask = (ques,yes,no) =>{
    if (ques) return yes(); else  return no()
}
ask ("вы согласны", ()=>console.log("yes"), ()=>console.log("yes"))