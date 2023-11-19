function repeatString(text, number) {
    let fullText = '';
    for (let i = 0; i < number; i++) {
        fullText += text;
    }
    console.log(fullText);
}
repeatString('abc', 3);
repeatString('String', 2);