function addOrSubtract(num1, num2, num3) {
    let sum = (a, b) => a + b; 
    let subtract = (a, b) => a - b;
    console.log(subtract(sum(num1, num2), num3));
}
addOrSubtract(23, 6, 10)
addOrSubtract(1, 17, 30)
addOrSubtract(42, 58, 100)