// i=3
// while (i< 6){   //"i+1"
//     console.log(i) //"i1"

// }

// for (a =10; a>0; a--)
// {
//    console.log("до while ", a)
//     while (a--)
//     console.log("while", a)
//     console.log(a)
// }

//console.log("после while ",a)

// i=0
// while (i++<3){
// console.log(i)
// }

// const a=10

// function fun(b)
// {
//     let new_a=100
//     new_a = a+b
//     console.log(new_a)
// }
// fun(a)

// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;

//       console.log(i);  // простое

//     }
//   }

//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }

// function test (a1,b1=test_1())
// {

// console.log(a1+" and "+b1)
// }
// test (1)

//  function test_1 (arg){
//      return arg="arg"+9
//  }
// function stepenNumber (num, step){
//     new_num=1
//     if (num<=1 || step<=1)
//     {
//         console.log(false)
//     } else {
//     for (i=0; i<step; i++){
//         new_num=new_num*num
//         console.log(new_num)
//     }}
// }
// stepenNumber(3,3)

//  function neW (arg1, arg2){
// a = 2;
// console.log(a)
//  }
//  neW(7)
// i=3
// while (i)
// console.log(i)

// function stroka(str, part) {
//   if (str.includes(part)) {
//     let one_of_pos_in_for;
//     let counter_part_in_str = 0;
//     for (i = 0; i < str.length; i++) {
//       let new_pos_in_for;
//       console.log(new_pos_in_for = str.indexOf(part, i))

// if (new_pos_in_for !== one_of_pos_in_for && new_pos_in_for != -1) {
//   one_of_pos_in_for = new_pos_in_for;
//   counter_part_in_str++;

// }
// }
// return counter_part_in_str
// }
// }

// console.log(stroka("‘А роза упала на лапу Азора", "а"));

// function isPol(str) {
//   let counter_pos = 0;
//   let position_start = "",
//     position_end = "";
//   while (str.length > counter_pos) {
//     position_start = str[counter_pos].toLowerCase();
//     position_end = str[str.length - 1 - counter_pos].toLowerCase();

//     if (position_end === position_start) {
//       counter_pos++;
//     } else {
//       console.log(str + " is not Palindrome");
//       return false;
//     }
//   }

//   console.log(str + " is Palindrome");
// }
// isPol("Арора");

// function isPOLIN(str) {
//     let iter = 0,
//     pos_start = 0,
//     pos_end = 0;

//   while (str.length > iter) {
//     pos_start = str[iter];
//     pos_end = str[str.length - 1 - iter];
//     if (pos_start === pos_end) {
//       iter++;
//     } else {
//       console.log(str + " is not Pal ");
//       return false;
//     }
//   }
//   console.log(str + " is Pal");
// }
// isPOLIN("арвсора")

// function split_in_srt(str, part){

//   console.log(str.split(part).length-1)
// }
// split_in_str("N R T N", " ")

// function part_in_str_For(str, part){
//   let one_of_pos_in_for,
//   counter = 0;
//   for (i=0; i<str.length; i++){
//   let pos_in_for;
//   pos_in_for = str.indexOf(part, i)
//   if (pos_in_for!==one_of_pos_in_for && pos_in_for!==-1){
//     one_of_pos_in_for=pos_in_for
//     counter++ }}
//   return counter}
//   console.log(part_in_str_For("пппривет", "п"))

// function isPal (str){
//   let end,
//   start
//   for (i=0; i<str.length; i++){
//     start = str[i]
//     end = str[str.length - i -1]
//     if (start===end){
// console.log(str + " is pal")
// return true
//     }
//     else{
//       console.log(str + " is not pal")
//       return false
//     }
//   }
// } isPal("око")

// function isPalReverse( str){
//   let reversed_str="";
//   for (i=str.length-1; i>=0; i--){
//   reversed_str += str[i]
//   }
//   return str === reversed_str
// }
// console.log(isPalReverse("оно"))

// function isPol_reverse_array(str, part){
//    return str === str.split(part).reverse().join('')

// }
// isPol_reverse_array("око", "")

// function symbols (str){
//   let new_str=''
//   for (let i=0; i<str.length; i++){
//        new_str= str.split(str[i])

//        console.log(new_str)
//   }}
// symbols("hello")

// function symbols (str){
//   let new_str;
//   new_str = str.split("")
// for( let i=0; i<new_str.length ; i++){
//   let new_pos = '';
//   new_pos = new_str.indexOf()

// }}

// function countUniqSymbols(string) {
//   const splited = string.split('');
//   let letterHolder;
//   for (let index = 0; index < splited.length; index++) {
//     if (letterHolder !== splited[index]) {
//       letterHolder = splited[index];
//       console.log(splited[index], string.split(splited[index]).length - 1);
//     }
//   }
// }

// countUniqSymbols('hello');

// function charAtstr(str){
//   const str_splited = str.split('');
//   let counter_char;
//     for (let i=0; i<str_splited.length; i++){
//       if(counter_char !== str_splited[i] ){
//         counter_char = str_splited[i]}

//         console.log(str_splited[i], str.split(str_splited[i]).length-1)

//   }
//     }

// charAtstr("домой")

