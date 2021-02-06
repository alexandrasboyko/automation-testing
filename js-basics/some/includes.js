arr = [{ price: 10 }, { price: 20 }, { price: 30 }];

function find_ele(pole) {
  const a = arr.some(function (obj) {
    return obj.price === pole;
  });
return a
}

console.log(find_ele(30));

const neww = arr.some(function (obj) {
  return obj.price === 30;
});
console.log(neww);
