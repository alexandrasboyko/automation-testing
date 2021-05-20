const staff = {
  admin: [{ name: "Emmy", age: 26, gender: "W" }],
  cashier: [{ name: "Nick", age: 25, gender: "M" }],
  seller: [
    { name: "Jina", age: 23, gender: "W" },
    { name: "Paul", age: 21, gender: "M" },
  ],
};
function managment(new_staff) {
  const { category, ...rest } = new_staff;

  if (staff[category] === undefined) {
    staff[category] = [];
  }
  staff[category].push(rest);
}

// const a = managment({ category: "driver", name: "Sam", age: 30, gender: "M" });

// console.log(staff);

function get_info_about_staff(category) {
  return staff[category];
}
console.log(get_info_about_staff("driver"));

function gender_sort() {
  const keys_of_staff = Object.keys(staff);

  const allStaff = [];

  keys_of_staff.forEach(function(key) {
    staff[key].forEach(function(staffItem) {
        allStaff.push(staffItem)
    })
  })

  return allStaff.reduce(function(sortedByGender, item) {
    const {gender, ...rest} = item
    if(sortedByGender[gender] === undefined) {
        sortedByGender[gender] = []
    }
    sortedByGender[gender].push(rest)
    
    return sortedByGender;
  }, {})
}


console.log(gender_sort());





function chek_gender (){
const keys_of_staff = Object.keys(staff)

const new_obj = []

keys_of_staff.forEach(function (key){
    staff[key].forEach(function (obj) {
    new_obj.push(obj)
})
})
return new_obj.reduce( function (sorted_by_gender, item)  {
const {gender, ...rest} = item
console.log(sorted_by_gender, [category])
if (sorted_by_gender[category]===undefined) {
    sorted_by_gender[category]= []}
    sorted_by_gender[category].push(rest)
return sorted_by_gender
}, {})
}

console.log(chek_gender())