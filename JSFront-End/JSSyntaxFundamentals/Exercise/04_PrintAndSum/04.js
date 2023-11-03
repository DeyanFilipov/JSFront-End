function solve(num1, num2) {
    let nums = [];
    let sum = 0;

    for(let i = num1; i <= num2; i++) {
        nums.push(i);
        sum += i;
    }
    console.log(nums.join(' '));
    console.log(`Sum: ${sum}`);
}

solve (0, 26)