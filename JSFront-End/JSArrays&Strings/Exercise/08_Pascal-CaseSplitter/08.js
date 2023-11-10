function splitPascalCase(inputString) {
    const words = inputString.match(/[A-Z][a-z]*/g);
    
    if (words) {
        const result = words.join(', ');
        console.log(result);
    }
}
splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitPascalCase('HoldTheDoor');
splitPascalCase('ThisIsSoAnnoyingToDo');