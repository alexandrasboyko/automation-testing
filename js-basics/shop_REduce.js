const staff = {
  admin: [{ name: "Emmy", age: 26, gender: "W" }],
  cashier: [{ name: "Nick", age: 25, gender: "M" }],
  seller: [
    { name: "Jina", age: 23, gender: "W" },
    { name: "Paul", age: 21, gender: "M" },
    { name: "Shy", age: 23, gender: "M" },
  ],
};

const shop = {};
function add_new_ed_tovara(ed_tovara) {
  const { category, ...rest } = ed_tovara;

  if (shop[category] === undefined) {
    shop[category] = [];
  }
  shop[category].push(rest);
}
add_new_ed_tovara({category:"dress", size:"XS", price:"500"})
add_new_ed_tovara({category:"skirt", size:"S", price:"600"})
add_new_ed_tovara({category:"jeans", size:"M", price:"700"})
add_new_ed_tovara({category:"dress", size:"L", price:"800"})
console.log("shop", shop)


function add_new_staff(new_person) {
  const { category, ...rest } = new_person;
  if (staff[category] === undefined) {
    staff[category] = [];
  }
  staff[category].push(rest);
}
add_new_staff({ category: "driver", name: "Sam", age: 30, gender: "M" });

console.log(staff);

function find_staff_person(new_obj) {
  const { category, ...rest } = new_obj;
  const keys_of_rest = Object.keys(rest);

  const founded_staff_person = staff[category].find(function (element) {
    return keys_of_rest.every(function (key) {
      return new_obj[key] === element[key];
    });
  });
  const index = staff[category].findIndex(function (person) {
    person === founded_staff_person && person !== -1;
  });
  const person_find = staff[category].splice(index, 1)[0];
  return {
    show: function () {
      return person_find;
    },
    back_to_the_shop: function () {
      console.log(" назад ");
      add_new_staff({ category, ...rest });
    },
  };
}

const a = find_staff_person({
  category: "driver",
  name: "Sam",
  age: 30,
  gender: "M",
});
console.log("find - > ", a.show());

console.log("staff after find -> ", staff);

console.log(a.back_to_the_shop());
console.log("staff after_back -> ", staff);

function chek_gender() {
  const categories_keys_of_staff = Object.keys(staff);

  const new_obj_with_elements = [];

  categories_keys_of_staff.forEach(function (category) {
    staff[category].forEach(function (element) {
      new_obj_with_elements.push(element);
    });
  });

  return new_obj_with_elements.reduce(function (acc, elem_gender) {
    const { gender, ...rest } = elem_gender;
    if (acc[gender] === undefined) {
      acc[gender] = [];
    }
    acc[gender].push(rest);
    return acc;
  }, {});
}
console.log(chek_gender());
