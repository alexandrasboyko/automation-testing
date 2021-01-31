pluuhbj  const { create } = require("domain");
const { stdin, stdout } = require("process");
const readline = require("readline");
const rll = readline.createInterface({
  input: stdin,
  output: stdout,
});

rll.question("Пароль", (userParol) => {
  if (userParol == "main") {
    console.log("Hello,admin");
  } else if (userParol !== "main") {
    console.log("Здравствуйте, вы ошиблись");
  }
  rll.close();
});
