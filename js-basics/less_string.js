let string = "word";

console.log(string[2]);
string[2] = "KKK";
console.log(string[2]); // UNDEFINED, потому что НЕЛЬЗЯ изменять просто так символы в строке

console.log(string[0]); //  выводит первый символ строки, индексы строки начинаются с 0 ! ! !
//  [ ] ОТВЕЧАЮТ ЗА РАСПОЛОЖЕНИЕ [позицию] ИНДЕКСА каждого символа
string = string[0] + "ooW"; //  ТОЛЬКО к певому символу строки добавляет новые символы строки
console.log(string); // теперь это новое значение строки, т.е. НОВОЕ СЛОВО ! ! !

string = string + " it's snow"; // ТЕПЕРЬ это добавление к уже существующему значению строки еще новые символы
console.log(string); // получаем это новое значение
string = "Nothing"; // переприсвоили ЗНАЧЕНИЕ
console.log(string);

console.log(string.length); // свойство, которое возвращает длину строки "7" символов, начинается с 1 !!!
// length ОТВЕЧАЕТ ЗА КОЛИЧЕСТВО СИМВОЛОВ в строке
console.log("length = " + string.length); // приводит результат вычисления к строке, конкатинирует length = 7
console.log("!!!           " + string[string.length]); // у строки есть значение ее длины, которое равно 7
// (7-1) = позиция дпоследнего символа !!!
console.log(string[6]); // в даном случае мы вычисляем что это string[6]

for (let str of string) {
  console.log([str]);
}

console.log("UP => " + string.toUpperCase());
console.log("DOWN => " + string.toLowerCase());

console.log("one Up => " + string[6].toUpperCase());

//________________ПОИСК ПОДСТРОКИ_______________

console.log(string.indexOf("ot")); // поиск вернет значение 1, т. к подстрока начинается с [1] й позиции или индекса
console.log(string.indexOf("ot", 2)); // поиск вернет -1, т. к подстрока начинается с [1] позиции,
//а в примере указано начинать поиск с [2] позиции

//_______________Если подстрока повторяется, то нужно использовать цикл



// for (pos; pos < str.length; pos++) {
//     if(str.indexOf("Wor", pos) === -1){ continue;}
//     console.log(`Найдено тут: ${str.indexOf("Wor", pos)}`)  
     
// }


let str = "MyWord in World";
let pos=0;
let chek="Wor"
while (true){
foundPos = str.indexOf(chek, pos)
if (foundPos == -1) break;
console.log("Найденo на " + foundPos + " позиции")
pos=foundPos+1
}
//____________________________________
string="DAY Today"
console.log(string.length)
console.log(string[string.length-1])
console.log(string[string.length-1].toUpperCase())
console.log(string.lastIndexOf("a"))
console.log(string.includes("D", 5))
console.log(string.startsWith("DA"))
console.log(string.endsWith("AY Today"))

//___________Для получения подстроки
// есть три метода slice, substr, substring
   //Метод slice возвращает согласно заданым параметрам (числовым) откуда START докуда END ! не включая END 
  // (конец необязательно)вернуть по умолчанию будет до конца строки
console.log("slice > "+string.slice(4, 8))
console.log(string.slice(4))
  //также есть возможность двигаться с конца по индексам, для этого нужны отрицательные значения
console.log(string.slice(-8, -3))
 // substr возвращает от начального заданого индекса то количество символов, что мы укажем во втором параметре
 console.log(string.substr(2, 5))
 console.log(string.substr(5, 2))
// substring ворнет строку от start до end, первый аргумент может быть отрицательным, тогда символу вернуться с конца
console.log("substring > " + string.substring(4, 8))
// console.log("substring > " + string.substring(-4, 9))_________________________________________
string = "string1"
string[3] = "S" //не работает 
string = string + "S" //первый и последний элемент в строке можно изменить через конкатинацию
string = string.slice(1, string.length-3)
console.log(string)

// console.log(" !!!! "+ string[0])//

// console.log("string2".codePointAt(5))
// console.log(string.codePointAt(5))//
// console.log(String.fromCodePoint(90))// 

