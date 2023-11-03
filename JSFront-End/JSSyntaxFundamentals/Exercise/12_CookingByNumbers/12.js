function solve(number, op1,op2,op3,op4,op5) {
    let num = parseInt(number);
    let listOfOperators = [];
    listOfOperators.push(op1, op2, op3, op4, op5);
    for(op of listOfOperators) {
        if (op === 'chop') {
            num = num / 2;
        } else if (op === 'dice') {
            num = Math.sqrt(num);
        } else if (op === 'spice') {
           num += 1;
        } else if (op === 'bake') {
            num *= 3;
        } else if (op === 'fillet') {
            num = num - (num * 0.2);
        }
        console.log(num);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')