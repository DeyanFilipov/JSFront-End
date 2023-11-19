function charactersInRange(char1, char2) {
    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();
    let charsBetween = [];
    if (code1 < code2) {
        for (let i = code1 + 1; i < code2; i++) {
            charsBetween.push(String.fromCharCode(i));
        }
    } else {
        for (let i = code1 - 1; i > code2; i--) {
            charsBetween.push(String.fromCharCode(i));
        }
    }

    if (code1 < code2 ) {
        console.log(charsBetween.join(' '));
    } else {
        charsBetween.reverse();
        console.log(charsBetween.join(' '));
    }
}
charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')