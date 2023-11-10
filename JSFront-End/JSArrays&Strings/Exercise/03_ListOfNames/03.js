function names(array) {
    let sorted = array.sort((a,b) => {
        return a.localeCompare(b)
    });
    let place = 0;
    let output = [];
    for (el of sorted) {
        place += 1;
        output.push(`${place}.${el}`);
    }
    return(output.join('\n'));
}
console.log(names(["John", "Bob", "Christina", "Ema"]));