// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let words = ['python', 'java', 'swift', 'javascript'];

function wordPicker(lastWord, wordsArray) {
    if (lastWord !== undefined) {
        let newArr = words.filter(newArrWord => newArrWord !== lastWord);
        return newArr[Math.floor(Math.random() * newArr.length)];
    } else {
        return words[Math.floor(Math.random() * wordsArray.length)];
    }
}

function hideWord (word) {
    let wordArr = Array.from(word);
    let hiddenWord = '';
    for (i in wordArr) {
        hiddenWord+='-';
    }
    return hiddenWord;
}

function game(words) {
    let word = wordPicker(words);
    console.log(word);

}

game(words);