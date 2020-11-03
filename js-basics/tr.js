const readline = require('readline');

const rll = readline.createInterface({
  input: process.stdin,
 output: process.stdout
});

rll.question('Какая компания создала JavaScript?', (company)  => {

if (company == 'Netscape') {
  console.log('Верно!')
} else {
  console.log('Неправильно.')
  
  rll.close()
}
})
