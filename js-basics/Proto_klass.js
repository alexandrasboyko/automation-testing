const Animal = function (options) {
  this.name = options.name;
  this.color = options.color;
};
  Animal.prototype.voice = function (){
    console.log ("voice from", this.name)
 }
const dog = new Animal({name: "Rex", color: "#fff"})

const Cat = function(options){
Animal.apply(this, arguments)
this.age=options.age
this.type= 'kitty'}

Cat.prototype = Object.create( Animal.prototype)
Cat.prototype.constructor=Cat


Cat.prototype.voice = function(){
console.log("miw", this.name)
}

const cat = new Cat ({name:"Murka", color:"black", age: "2 years"})
console.log(cat)
cat.voice()
dog.voice()



