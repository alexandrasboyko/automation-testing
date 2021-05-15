const arr_shop = [20, 40, 30, 10, 9]; 
function sort_price (price){ 
for (i=0; i<arr_shop.length-1; i++){ //         i=0             i=1                    i=2               i=3
 
    for (j=0; j<arr_shop.length-1-i; j++){

        if(arr_shop[j]>arr_shop[j+1]){ // i = 0 
          // j=0 [20 30 40 10 9]    j=1  [20 30 10 40 9]       j=2 [20 30 10 9 40]   j=3 [ 20 30 10 9 40]
          // j=4 []
        
        let new_state = arr_shop[j+1] // i=1
        // j=0 [20 10 30 9 40 ] j=1 [20 10 9 30 40] j=2 [20 10 9 30 40] j=3 []
        arr_shop [j+1] = arr_shop[j] // i=2  
         // j=0 [10 20 30 9 40] j=1 []
        arr_shop[j]=new_state 
        console.log("arr_shop = ", arr_shop )
     }}}
return arr_shop
}

console.log(sort_price(arr_shop))

// function sort_2Price(price) {
//  for (i=0; i<arr_shop.length-1; i++){
//      let index_min_value = i
//       for (j=i+1; j<arr_shop.length; j++){
//          if(arr_shop[index_min_value]>arr_shop[j])
//          index_min_value=j
//     }
//     let new_state = arr_shop[index_min_value]
//     arr_shop[index_min_value]=arr_shop[i]
//     arr_shop[i]=new_state
// }
// return arr_shop
// }

// console.log(sort_2Price(arr_shop));


const array = [
    { a: 'A', price: 10 },
    { a: 'B', price: 60 },
    { a: 'C', price: 30 },
    { a: 'D', price: 70 },
    // { a: 'X', price: 50 },
    // { a: 'Z', price: 80 },
    // { a: 'Y', price: 70 },
    // { a: 'L', price: 60 },
    // { a: 'M', price: 30 },
    // { a: 'A', price: 100 },
  ];
  
  array.sort((a, b) => {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return 1;
    }
    return 0;
  });
  console.log(array);

arr_shop.sort ((a, b)=>{
    if (a>b) return 1
    else if (a<b) return -1
    else return 0
})
console.log(arr_shop)