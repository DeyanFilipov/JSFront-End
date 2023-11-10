function modernTimes(inputSting) {
    const regex = /#([a-zA-Z]+)\b/g;

    let match;
    while ((match = regex.exec(inputSting)) !== null) {
        const specialWord = match[1];
        console.log(specialWord);
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English- speaking #regions as the #number sign');