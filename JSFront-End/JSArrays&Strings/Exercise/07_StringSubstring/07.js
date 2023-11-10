function stringSubstring(word, text) {
    let textArr = text.split(" ");
    let result = `${word} not found!`;

    for (const wordInText of textArr) {

        if (word === wordInText.toLowerCase()) {
            result = word;
            break;
        }
    }

    console.log(result);
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');