// const Female = {
//   women_names: "nina",
//   women_ages: 23

// }
//  const Julia = Object.create(Female)

// console.log(Julia.women_ages)

// const Gorod = {

//   size: 2,
//   district : 4
// }

// const Kiev = Object.create(Gorod)

// console.log(Kiev.size)

function Date(day, month, year) {
  (this.day = day), (this.month = month), (this.year = year);
}
Date.prototype.date = function () {
  console.log(`kjnkln`);
};

const today = new Date();



today.prototype = Object.create(Date.prototype);
today.prototype.contructor = today;
today.prototype.we = function () {
    console.log("oidjf");
  };

today.date