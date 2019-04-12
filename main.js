var string = "     Please1 input a string. Make sure 123 you did it properly.   1    ";
console.log(string);

var wordsArray = make_words_array_from_string(string);
console.log(wordsArray);

var count = 0;
for (let i= 0; i < wordsArray.length; i++) {
    if (check_real_word(wordsArray[i])) {
        console.log(wordsArray[i]);
        count = count + 1;
    }
}
console.log("Number of proper words: " + count);
