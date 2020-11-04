const { create } = require("domain");
const { stdin, stdout } = require("process");
const readline=require("readline")
const rll=readline.createInterface({
    input:stdin,
    output:stdout,
});

rll.question("какое название JS? ", (x) => {
  
  if (x == "ecmascript") {
    console.log("verno");
  } else {
    console.log("neverno", x);
  }
  rll.close();
});
