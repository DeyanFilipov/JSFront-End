function solve(num) {
    const numStr = num.toString();
    let sum = 0;
    let firstDigit = numStr[0];
    let same = true;

    for(let digit of numStr) {
        sum += parseInt(digit);
        if (firstDigit !== digit) {
            same = false;
        }
    }
    console.log(same);
    console.log(sum);
}
solve(1234)