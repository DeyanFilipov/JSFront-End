function numberModification(number) {
    let listOfNumbers = [];
    let numStr = number.toString();
    for (el of numStr) {
        listOfNumbers.push(parseInt(el));
    }

    let sum = 0;
    for (el of listOfNumbers) {
        sum += el;
    }

    let average = sum / listOfNumbers.length;

    while (average < 5) {
        listOfNumbers.push(9);
        sum += 9;
        average = sum / listOfNumbers.length;
    }

    console.log(listOfNumbers.join(''));
}
numberModification(101);
numberModification(5835);