function smallestNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else if (num3 < num1 && num3 < num2) {
        console.log(num3);
    } else {
        console.log(num1)
    }
}
smallestNumber(2, 5, 3)
smallestNumber(600, 342, 123)
smallestNumber(25, 21, 4)
smallestNumber(2, 2, 2)