function palindromeIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        const numStr = array[i].toString();
        const reversedNumStr = numStr.split('').reverse().join('');
        let a = (numStr == reversedNumStr);
        if (a) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])