const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Возраст?", (age) => {
  let message =
    age < 3? "Здравствуй, малыш!": age < 18? "Привет!": age < 100? "Здравствуйте!" :
    'Какой необычный возраст!';

  console.log(message);
  rl.close();
});
