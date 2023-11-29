function wordsTracker(array) {
    let searchedWords = (array.shift()).split(' ');
    let wordsOccurences = [];
    for (el of searchedWords) {
        let occurence = 0;
        for (word of array) {
            if (el === word) {
                occurence += 1;
            }
        } 
        let add = {};
        add[el] = occurence;
        wordsOccurences.push(add);
    }
    wordsOccurences.sort(function (a, b) {
        return b[Object.keys(b)[0]] - a[Object.keys(a)[0]];
    });

    wordsOccurences.forEach(function (item) {
        var key = Object.keys(item)[0];
        var value = item[key];
        console.log(`${key} - ${value}`);
    });
}
wordsTracker([ 'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task' ])
wordsTracker([ 'is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])