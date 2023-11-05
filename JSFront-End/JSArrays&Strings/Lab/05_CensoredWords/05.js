function solve(text, word) {
    function repeat(word) {
        return '*'.repeat(word.length);
    }

    let censored = text.replace(word, repeat(word));
    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word)); 
    }
    return censored;
}
let a = solve('A small sentence with some words', 'small');
console.log(a);