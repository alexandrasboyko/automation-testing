//________________________УНАРНЫЕ И БИНАРНЫЕ ОПЕРАТОРЫ_________________

// Унарный оператор потому что он применяется только к одному операнду
// Бинарный оператор потому что он применяется к двум или больше операндам
let value = "a".charCodeAt()
console.log("a-код = ", value)
// 1. Унарный -

var x = 1,
x = -x
console.log(x)

// 2. Бинарный -
 let i= 1, y=10
 console.log(y-i)

 z= "5"-2
 console.log(z) // z=3
// операнды преобразовываются к типу Number также и для остальных операторов ( *, /), КРОМЕ +
 

 // 3. Бинарный +

 a= ("2"+2)
 console.log("a=", a) // a = 22 
 //если одна из двух операнд строка, то тогда выполняем преобразование к строкам,
// но если операнд больше чем две, тогда операнды преобразовываются и выполняются согласно приоритетам

// 4. Запятая ","
 let field =(1,2,3) //у запятой ниже приоритет , чем у присваивания =, 
 //поэтому вернулся и присвоился последний результат "3"

 let status = (2-1, 1-2) // вернеться и присвоится последнее выражение (1-2)
console.log("field = ", field, "status = ", status) 

// ?????????_______________________
let num = null;

num = ("35" + - "22") // приоритет выполнения у "+" и "-" одинаковый, но тут строки, которые не преобразовываются
// в числа 
console.log(num) // num = 35 - 22

//_______________Инкремент, декремент_______________
let counter_user = 0
let user = ++counter_user
console.log(--user)


//______________Оператор !==________________________
let day = "Monday",
stage_past = " was yesterday",
stage_future = " will be tomorrow"

day = day + stage_past // теперь day (!==) НЕ  Monday, a day = Monday was yesterday
console.log(day) // Monday was yesterday

day = day + stage_future // теперь day (!==) НЕ  Monday was yesterday, а day = Monday was yesterday will be tomorrow
console.log(day) // Monday was yesterday will be tomorrow

//____________Оператор ??_____________
//Вернет первый операнд, если который не null или undefined
a = b= c = null // a= nul, b= null, c = null
console.log(a?? " пусто ")
//____________null___________

console.log(null + 1, null - 1, null * 1,  null /1) 
console.log(1 + null, 1 - null, 1 * null, 1 / null)
console.log("2" > "12", "apple" > "pineapple",
" \t \n" - 2, "  -9  " + 5, "" + 1 + 0, "" - 1 + 0, "4px" - 2, "  -9  " - 5) 

let height = "";

console.log(height || 100); // 100
console.log(height ?? 100); // 0


