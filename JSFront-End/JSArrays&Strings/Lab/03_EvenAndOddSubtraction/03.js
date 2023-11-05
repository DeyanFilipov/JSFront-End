function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const number = parseInt(arr[i]);
        if (number % 2 === 0) {
            evenSum += number; 
        } else {
            oddSum += number;
        }
    }
    let finalSum = evenSum - oddSum;
    console.log(finalSum);
}
solve([3,5,7,9])