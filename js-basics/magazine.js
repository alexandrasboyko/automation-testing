const fs = require("fs");
const path = require("path");

const dataBasePath = path.resolve(__dirname, "./data.json");

function writeToDataBase(data) {
  fs.writeFileSync(dataBasePath, JSON.stringify(data));
}

function readDataBese() {
  return JSON.parse( fs.readFileSync(dataBasePath).toString());
}

// writeToDataBase([1, 2, 2, 3, 4, 5]);
const a = readDataBese()

console.log(a)
