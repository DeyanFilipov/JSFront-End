function print(array, step) {
    let output = [];
    for (let i = 0; i < array.length; i+= step) {
        output.push(array[i]);
    }
    return output;
}
console.log(print(['5', '20', '31', '4', '20'], 2))
console.log(print(['dsa', 'asd', 'test', 'tset'], 2))
console.log(print(['1', '2', '3', '4', '5'], 6))