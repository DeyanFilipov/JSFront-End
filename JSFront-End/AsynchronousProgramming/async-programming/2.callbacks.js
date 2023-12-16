function someFunc(callback) {
    // TODO: lines of code

    setTimeout(() => {
        callback(1, 2);
    }, 2000);
}

function calc(a, b) {
    console.log(a + b);
}

someFunc(calc);
