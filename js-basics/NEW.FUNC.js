function char_at_str (str) {
    
    const new_str_after_split = str.split("") 
    let counter_char;

    for (let i=0; i<new_str_after_split.length; i++){
        if ( counter_char !== new_str_after_split[i] ) {
            counter_char = new_str_after_split[i]
        }
    console.log(new_str_after_split[i], str.split(new_str_after_split[i]).length-1)
    }
}
console.log(char_at_str("доклад"))


function countUniqSymbols(string) {
    const splited = string.split('');
    let letterHolder;
    for (let index = 0; index < splited.length; index++) {
      if (letterHolder !== splited[index]) {
        letterHolder = splited[index];
        console.log(splited[index], string.split(splited[index]).length - 1);
      }
    }
  }
  
  countUniqSymbols('hello');


  