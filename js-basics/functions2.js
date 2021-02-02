const arr = [1, 2, 3];
function createStore() {
  //{name: string; price: number}
  const goods = [];
  return {
    addItem(item) { // передаю в качестве аргумента имя и прайс товара, которые есть объектами {}
      goods.push(item); // добавить товар в массив
    },
    sellItem(name) {  // передаем значение (имя/название) товара
      const itemIndex = goods.findIndex(  // константа равна массиву по которому осуществ проход,
        // и в котором мы проверяем для каждого объекта {}, который есть в этом массиве, логику из функции
        function(item) { 
        //передаю в функцию поочередно объекты {}, которые содержаться в массиве  
          return item.name === name; // и возвращаю логику T или F, "Т" в случае если объект, у которого
        // {}.name (поле) содержит в себе значение (имя или название товара) строго равное тому значению, 
        // что мы передаем в качестве аргумента, eсли значение true --> ТОГДА ЕГО ИНДЕКС мы ЗАПИСЫВАЕМ В ""CONST ITEM.INDEX""
    }
      );
      if(itemIndex === -1) { // ЕСЛИ ЗНАЧЕНИЕ НЕ НАЙДЕННО --> ТОГДА FIND.INDEX ВЕРНЕТ -1 
          return [] // ЕСЛИ -1 --> ТОГДА вернуть пустой массив
      }

      return goods.splice(itemIndex, 1)[0] // splice удаляет из массива (вырезает) объект, который прошел проверку и 
      // если он найден --> ТОГДА МАССИВ.SPLICE (ИНДЕКС КОТОРЫЙ ВЕРНЕТСЯ, УДАЛИТЬ ОДИН ЭЛЕМЕНТ ИЗ СПИСКА) 

  }};
}

const store = createStore();

store.addItem({name: 'Kepka', price: 1000});
store.addItem({name: 'Kepka', price: 1000});
store.addItem({name: 'Kepka', price: 1000});


console.log([1,2,3].splice(-1, 1))
console.log(store.sellItem("Kepka"));

const ARR =["1", "2", "3", "4"]
console.log(ARR.splice(ARR.length-1, 1))
let a= "string"
console.log(a.slice(0, a.length-1))

const c = ARR.findIndex(function (val, ind){
 return val==="3"

}
)
console.log(c);
 let r =ARR.slice(-3, -1)
 console.log(r)
 console.log(ARR)

 const user = function (){
    const holder= {}
     function (data){
     data.
     }
 }

 function 


