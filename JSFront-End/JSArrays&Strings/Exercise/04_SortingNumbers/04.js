function sortingNumbers(array) {
    let sorted = [];
    let end = array.length;
    for (i = 1; i <= end; i++) {
        if (i % 2 !== 0) {
            array.sort((a, b) => a - b);
            sorted.push(array[0]);
            array.shift();
        } else {
            array.sort((a, b) => b - a);
            sorted.push(array[0]);
            array.shift();
        }
    }
    return sorted;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));