function solve(str) {
    let words = str.match(/\b(\w+)\b/g);

    let upperCase = words.map(word => word.toUpperCase());
    return upperCase.join(", ");
}

console.log(solve('Hi, how are you?'));