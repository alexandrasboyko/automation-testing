function char_at_str (str) {
    
    let counter_char;
    const new_str_after_split = str.split("") 

    for (let i=0; i<new_str_after_split.length; i++){
    
        if ( counter_char !== new_str_after_split[i] ) {
            counter_char = new_str_after_split[i]
        }
    console.log(counter_char, str.split(new_str_after_split[i]).length-1)
    }
}
console.log(char_at_str("доклад"))

