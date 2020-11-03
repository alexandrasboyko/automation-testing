const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
 output: process.stdout
});

rl.question('В каком году была опубликована спецификация ECMAScript-2015?' , (year) => {

  console.log(` ${year}`);

  if (year==ECMAScript) {
   console.log ('Это слишком рано...' );
  } else if (year > 2015) {
    console.log( 'Это поздновато' );
  } else {
    console.log( 'Верно!' );
 }
 rl.close();
});

// let year = console.log('В каком году была опубликована спецификация ECMAScript-2015?', '');
