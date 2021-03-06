________________________________МАССИВ_________________________________

// у МАССИВА ПАРА СВОЙСТВО И ЕГО ЗНАЧЕНИЕ (КЛЮЧ: ЗНАЧЕНИЕ) 
// СВОЙСТВО (КЛЮЧ) ЕСТЬ ЦИФРОВЫМ, т.е. это будут ПОРЯДКОВЫЕ ЦИФРЫ, закрепленные за свойствами, 
// это которые есть или будут элементами массива

const dayOfWeek = [ "Mon", "Tues", "Wensd", "Thurs", "Fri", "Sat", "Sun"]

//for (let day of dayOfWeek){ } // массив формируется по длине (от 0 до n) и +1 к каждому новому элементу до n, переменная day отвечает за каждый n-нный элемент массива, 
                                // т.e. day[n] 
                                // переменной d присваивается массив с вырезанными элементами от day [n=0] до day [n=2], 
                                // т.е все что ( day[n] < day[n=2] )
    
   arr_slice = dayOfWeek.slice(1) //метод slice создал новый массив и скопировал туда значения из основного,
   //которые согласно условию нужно удалить [1], а оставшиесь записать в новый

console.log("dayOfWeek --> ", dayOfWeek) // при этом основной массив оставив без изменений
    
  console.log("arr_slice -->", arr_slice) // ["Tues", "Wensd", "Thurs", "Fri", "Sat", "Sun"]
    

    
arr_splice = dayOfWeek.splice(1) 
 console.log("dayOfWeek ->", dayOfWeek)  // метод splice порезал основной массив dayOfWeek так, что теперь 
                                        //  в нем только один оставшийся элемент dayOfWeek = [ 'Mon' ]
console.log("arr_splice ->", arr_splice) // а в переменной arr_splice будет массив из всех остальных оставшихся 
                                        //элементов . Т.е основной будет порезан на два массива


delete dayOfWeek[0] 
console.log("delete elem -> ", dayOfWeek) // удаляет элемент согласно заданому условию, но в том место оставляет след от удаления