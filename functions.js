function check_real_word (word) {
    var regexp = /^[A-Za-z]{1}[a-z]*$/;
    return regexp.test(word)? true : false;
}

function pop_dot_character_from_word (word) {
    var i = word.length;
    if (word[i-1] == ".") {
        word = word.substring(0,i-1);
    }
    return word;
}

function make_words_array_from_string (string) {
    string = string.trim();
    var wordStart = 0;
    var wordEnd;
    var word;
    var wordArray = [];
    var lastWord='';
    for (i = 0; i <= string.length; i++){
        if (string[i] == " ") {
            wordEnd = i;
            word = string.substring(wordStart, wordEnd);
            word = pop_dot_character_from_word(word);
            wordArray.push(word);
            wordStart = i + 1;
        }
    }
    lastWord = string.substring(wordStart,string.length + 1);
    lastWord = pop_dot_character_from_word(lastWord);
    wordArray.push(lastWord);
    return wordArray;
}