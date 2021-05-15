// const obj = undefined
// const obj1 = undefined

// function A(){
// return obj
// }

// function B() {
// return obj1
// }

// const a = new A()

// const b = new B()
// console.log(a)
// console.log(b)
// console.log(a==b)

// function Example() {
//   this.read = function () {
//     this.fir = +prompt("введите первое числo: ", 0);
//     this.sec = +prompt("введите второе число: ", 0);
//   };

//   this.sum = function () {
//     return this.fir + this.sec;
//   };
//   this.mull = function () {
//     return this.fir * this.sec;
//   };
// }

// let expl = new Example();
// expl.read();
// console.log('!')
// alert("Sum= " + expl.sum());
// alert("mul= " + expl.mull());
// console.log('!')


function Accumulator (starting_value){ 
    this.start_value = starting_value

    this.read = function () {
        this.num = +prompt ('введите число', 0)  
    }
    
    this.value = function () { 
        this.val = starting_value+this.num+this.val && starting_value++
        if (starting_value !== this.start_value){
            return this.val - starting_value
        }
        

       // this.new_value_2 = this.new_value_1+this.num
    }
}

let acumul = new Accumulator (2)
alert (acumul.start_value)
acumul.read()
alert (acumul.value())
acumul.read()
alert (acumul.value())
