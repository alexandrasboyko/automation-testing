// const Klass_A = function (object_of_Klass_A) {
//   this.born_year = object_of_Klass_A.born_age;
//   this.district_near_school = object_of_Klass_A.district_near_school;
// };
// Klass_A.prototype.age = function () {
//   console.log("ученику", 2020 - this.born_year, "лет");
// };

// const pupil_of_Klass_A = new Klass_A({
//   born_age: 2014,
//   district_near_school: true,
// });
// console.log(pupil_of_Klass_A);
// pupil_of_Klass_A.age();

// const Regime = function (proc1, proc2) {
//   this.walk = proc1;
//   this.study = proc2;
// };

// Regime.prototype.vremya_vmeste = function () {
//   console.log("together");
// };

// const Sasha = new Regum("сегодня", "завтра");

// console.log(Sasha);

//если в секнейм пришло ===число ---> тогда this.age = это это число секнейм, что пришло потому что пришло число, а число это age
  //если в секнейм пришло === не число, тогда this.age = это то, что пришло в age


// const Father = function (proc1) {};

// Father.prototype.run = function () {
//   console.log("run");
// };
// Father.prototype.walk = function () {
//   console.log("walk");
// };

// const Full_Father = function (name, secname, age) {
//   this.name = name
//   this.secname = typeof secname ==='string' ? secname : null
//   this.age = typeof secname === 'number' ? secname: typeof age === 'number' ? age: null

// }  


// Full_Father.prototype = Object.create(Father.prototype)
// Full_Father.prototype.constructor = Full_Father

// const sun = new Full_Father ("Ivan", "Ivanov", "l,")

// Full_Father.prototype.fly = function () {
//   console.log("fly");
// };
// Full_Father.prototype.swim = function () {
//   console.log("swim");
// };


// console.log(sun)


const Father = function (){

}

Father.prototype.walk = function(){
    console.log("гулять")
}

Father.prototype.jump = function(){
    console.log("прыгать")
}

const Full_Father = function(name, secname, age){
    this.name = name
   
    this.secname = typeof secname ==="string" ? secname: null
    this.age = typeof secname === 'number' ? secname: typeof age ==="number"? age: null 
}

const sun = new Full_Father("nina", 2, "fh")



Full_Father.prototype.swim = function (){
    console.log("swim")
}
Full_Father.prototype.fly = function (){
    console.log("fly")
}

Full_Father.prototype = Object.create(Father.prototype)
Full_Father.prototype.constructor=Full_Father

