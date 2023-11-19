function factorialDivision(num1, num2) {
    function factorialRecursive(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorialRecursive(n - 1);
        }
    }
    const result1 = factorialRecursive(num1);
    const result2 = factorialRecursive(num2);
    console.log((result1 / result2).toFixed(2));
}
factorialDivision(5, 2)
factorialDivision(6, 2)