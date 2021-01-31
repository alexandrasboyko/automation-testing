// let num
// do {
// num = prompt("Enter number >=100 : ")}

// while ( num<100 && num)

//____________________________

// kk: for (let i=0; i<3; i++){
//  for (let j=0; j<3; j++){
//      mes = prompt(`Значение координат ${i} , ${j} (), ()`)
//      if (!mes) ; break kk
//  }
// }
// alert("ok")

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     console.log ( i ); // простое
//   }
// }
// showPrimes(5)

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     console.log(i); // простое
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }

//   return true;
// }

// showPrimes(5);



// function rep (str, n) {
//    let new_str = "";
//    while (n>0){
//    new_str+=str
   
//    console.log(`${new_str}`)
// }
   
// }
// rep("hi", 3)

// function  mul (a, b){
//    let sum; 
   
//    sum = sq(a)+sq(b)
   
//  function sq (x)
//  {

//  return x*x
//  } 
 
//  console.log (sum)
 

// }
// mul (3, 5)

// function pow (a, n){
//   new_a=1;
//   if (a<=1 || n<=1) {
//     return false }
//     else {
//   for (i=1; i<=n; i++){
//     new_a=new_a*a
//     console.log(`${new_a}`)
//   }}

// }
// pow(3, 2)

function qwes (qwestion, yes, no){
  if (qwestion) yes()
  else no()
}

function showYES (){
  console.log ("OK")
}

function showNO (){
  console.log("NO")
}
function showQwestion (){
  console.log("Вы согласны?")
}
qwes (showQwestion, showYES, showNO)

// function user_age (age ){
//  let cur_age = false || age > 18
//  console.log(cur_age)
   
   
  
// }
// user_age (12)

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// function min (a,b){
// if (a>b) 
// {console.log(b) }
// else if (b>a) {console.log(a);}
// else
//  {console.log("они равны")
//  }
// }
// min (0,-1)






// let num;

// let resnult = "";
// num = prompt("Enter num: ");
// for (i = 2; i <= num; i++) {

//   for (n = 1; n <= i; n++) {
//     let result;
//     let simple
//     result = i % n;

//     if (result == 0) {
//       alert(`${i}/ ${n} = ${result} `);

//       if (simple == i || 0) {

//         simple = n / i;
//         resnult += ` ${i}/ ${n} = ${simple} \n`;
//       }
//     }
//   }
// }
// alert(resnult);

//  let num = prompt ('Enter number >100 ?','');
//  while (num < 100 ) {
//      console.log("")
//       if (num=""); break
//  }


function fd (quest , yes, no){
  if (confirm(quest))
    yes()
    else no()

  }
  fd ("Вы согласны?", function () {alert("вы согласились")}, function() {alert("вы отменили")} )


  function checkAge (question, baby, adult, oldMan) {
    switch (prompt(question)) {
    case 'ребенок':
    baby();
    break;
    case 'взрослый':
    adult();
    break;
    case 'пожилой':
    oldMan();
    break;
    }
    }
    
    checkAge(
    "Напечайте на сколько вы оцениваете свой возраст, выбрав из: ребенок, взрослый или пожилой",
    function() { alert("Приветики"); },
    function() { alert("Здравствуйте"); },
    function() { alert("Здравия желаю"); }
    );