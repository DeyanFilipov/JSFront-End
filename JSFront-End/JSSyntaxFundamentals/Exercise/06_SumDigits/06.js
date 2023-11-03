function solve(numbers) {
    let sum = 0;
    let num = numbers.toString()
    num = num.split('')
    let lenOfNum = num.length - 1;

    for (i = 0; i <= lenOfNum; i++) {
        sum += parseInt(num[i])
    }
    console.log(sum);
}

solve(97561)