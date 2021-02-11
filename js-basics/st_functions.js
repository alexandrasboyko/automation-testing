// function myfunc (carName){
//     carName.name="Ford"
// }
// const mycars={name : "BMV", model: "FFF", age: "12"}
// const x = mycars.name
// myfunc(mycars)

// console.log(mycars)

// const nameCar = function (name){return name+2}
// let x= nameCar(7)
// console.log(x)

// const eda = function (name){
//    function porciya (x){
//        return x+x
//    }
// return (porciya(name))}
// console.log(""eda(3))

// const Papa ={
//     walk: function(time){
//         console.log("гуляет", time+" мин")

//     }
// }
// function res(on)
// {
//     on.walk(5)
// // }
// // res(Papa)

// // let factorial = function fac(n) { return n < 2 ? 1 :
// //       n *  fac(2); };
// // //console.log (n *  fac(n - 1))
// //   console.log(factorial(5))

// //   function factorial(n){
// //    let result=1 ;
// //     while(n){

// //         result =result* n--;
// //     }

// //     return result;
// // }
// // console.log (factorial(3))
// // let i=3
// // while (i!=0){
// //     console.log (i)
// // i=i-1}

// // let i=0
// // while (i<3) {
// //     console.log(i)
// //     i++
// // }

// // for (let i = 0; i < 10; i++) {

// //     // если true, пропустить оставшуюся часть тела цикла

// //     if (i % 2 === 0) continue;
// //     console.log(i)
// //    }
// // for (let i=0; i<10; i++){
// //     if (i%2){
// //     console.log (i)}
// // }

// // const aa=[10, 20, 0, 15]
// // for (let a of aa){
// //     if (a==0)
// //     console.log(a)
// // }
// const j = [5, -2, -3, "t"];
// const i = [11, -44, 33, "ss"];
// let novaya = null;
// for (let jj of j) {
//   if ( jj === +jj && jj >0) {
//     for (ii of i) {
//       if (ii < 0 || ii!== +ii) {
//         //   console.log(ii)
//         break ;
//       }
//       console.log((novaya = `${jj}, ${ii}`));
//     }
//   }
// }
// console.log("final")

const ar1 = [ 2, 3, 4];
const ar2 = [ 2, 3, 4];
// let novaya = null
// for (let ii of i){
// { for (let nn of n){
//     console.log (novaya = `${ii}`, `${nn}`)}
//     if (ii%nn===0 || ii/1===ii) {
//     console.log(ii)
// }
//     }
// }


// for (n=2; n<=10; n++)
// for (i=2; i<=10; i++) {  
//     if (i%n==0 && n/1==n){
// console.log(`${i}/ ${n} без остатка`)
//     }}
    let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...
    
      for (let j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue nextPrime; // не подходит, берём следующее
      }
    
    console.log( i );}
//   {
// console.log (ii) }

//     if num  {
//       console.log(` ${i} c остатком`);
//     }
//   }

//}
// i.forEach((ii, index) => {
//    if(ii<0 || j[index] <0) return
//     console.log(ii , j[index])
// if(typeof ii ==='number') {
//     j.forEach((jj) => {
//         if(typeof jj ==='number') {
//         }
//     })
// }
// })

// function find_ele(pole) {
//   const a = arr.some(function (obj) {
//     return obj.price === pole;
//   });
// return a
// }

// console.log(find_ele(30));

// const neww = arr.some(function (obj) {
//   return obj.price === 30;
// });
// console.log(neww);

// function metod(val) {
//   const find_number = arr.some(function (obj) {
//     if (val) console.log(obj.pole === val);
//     obj.pole === val;
//   });
//   return find_number;
// }
// console.log(metod(10));

