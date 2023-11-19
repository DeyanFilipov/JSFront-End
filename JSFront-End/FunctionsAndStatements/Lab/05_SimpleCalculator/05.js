function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case 'multiply':
            multiply = (a, b) => a * b;
            console.log(multiply(num1, num2));
            break;
        case 'divide':
            divide = (a, b) => a / b;
            console.log(divide(num1, num2));
            break;
        case 'subtract':
            subtract = (a, b) => a - b;
            console.log(subtract(num1, num2));
            break;
        case 'add':
            add = (a, b) => a + b;
            console.log(add(num1, num2));
            break;
    }
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');