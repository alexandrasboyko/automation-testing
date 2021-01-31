function cheksen(pred, part) {
  if (pred.includes(part)) {
    let couter_part_in_pred = 0; // счетчик подстрок в предложении, сколько раз подстрока повторяется
    let oneOF_pos_in_for; //  начальная позиция одного из
    for (let i = 0; i < pred.length; i++) {
      // i в цикле отвечает за прохождение от начала и до конца всей длины строки

      let new_pos_in_for;
      console.log((new_pos_in_for = pred.indexOf(part, i)));

      if (new_pos_in_for !== oneOF_pos_in_for && new_pos_in_for != -1) {
        oneOF_pos_in_for = new_pos_in_for;

        couter_part_in_pred++;
      }
    }
    return couter_part_in_pred;
  }
}
console.log(cheksen("ollo", "o"));

// let str= "string, string"
// part = ","
// new_str=str.split(part)
// console.log(new_str)

// names="Sasha Lera Rita "
// cut="a"
// console.log(names.split(cut))

// function splitt (str_to_split, part_cut){
//     let new_str_after_split= str_to_split.split(part_cut)
//     console.log("Origin string: " + str_to_split)
//     console.log("Separator: "+ part_cut)
//     console.log('Arrays includes:' + new_str_after_split.length + 'elements =>' +  new_str_after_split )}

// splitt(names, a )

// function word (str_to_split, part_cut){
// let new_str_after_split= str_to_split.split(part_cut)

// // console.log("Origin string: " + str_to_split)
//  // console.log("Separator: "+ part_cut)
//  //console.log('Arrays includes: ' + new_str_after_split.length + '  elements =>' +  new_str_after_split )

// }

// let a = "word in world";
// let b ="";
// let new_a= a.split(b)
// console.log(new_a)

// console.log(a.slice(2, 4), a.slice(-8, -6))

// function random (min, max){
//     let neww;
//     return neww = Math.round(min+Math.random()*(max-min))

// }
// console.log(random(3,6))

// function truncate (str, count)
// {
//     if (str.length > count){
//         new_str= str.slice(0, count) + " ... "
//      console.log(new_str)
//     }
// }
// truncate ("vgwegwefwf",  3)

// function ispOL(str)  {
//     for(let i=0;i<str.length;i++) {
//        const bukva = str[i]
//        console.log("bukva = ", bukva)
//       const bukvaSKonca = str[str.length - 1 - i]
//       console.log("bukvaSKonca = ", bukvaSKonca)

//        if(bukva !== bukvaSKonca) {
//            return false
//        }
//     }

// }
// ispOL("око")

function countUniqSymbols(string) {
  const splited = string.split("");
  let letterHolder;
  for (let index = 0; index < splited.length; index++) {
    if (letterHolder !== splited[index]) {
      letterHolder = splited[index];
      console.log(splited[index], string.split(splited[index]).length - 1);
    }
  }
}

countUniqSymbols("helolo");

function split(str) {
  let filt = str.split("").filter((item, index) => str.indexOf(item) === index);
  console.log(filt);
  for (let i = 0; i < filt.length; i++) {
    new_str = str.split(filt[i]).length - 1; //т.е из строки мы вырезаем новый массив filt , отфильтрованный без повторений одной и той же буквы
    console.log(filt[i], " повторяется ", new_str, " раз");
  }
}
split("vvelo");


function split (str){
    filt_str = str.split("").filter(elem, index) => str.indexOf{elem === index}
}