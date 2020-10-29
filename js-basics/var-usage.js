const papa = {
  walk: function () {
    console.log("гулять");
  },
};
const children = {
  run: function () {
    console.log("бегать");
  },
};

function rez(walk) {
  walk.walk();
}

rez(papa);
