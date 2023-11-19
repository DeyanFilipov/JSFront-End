function perfectNumber(num) {
    let isPerfect = true;
    let divisors = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    let sum = divisors.reduce(function(a, b) {
        return a + b;
    });
    if (sum === num) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.")
    }
}
perfectNumber(6) 
perfectNumber(28) 
perfectNumber(1236498)