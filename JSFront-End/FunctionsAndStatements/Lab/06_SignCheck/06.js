function signCheck (numOne, numTwo, numThree) {
    let one = false;
    let two = false;
    let three = false;
    if (numOne > 0) {
        one = true;
    }
    if (numTwo > 0) {
        two = true;
    }
    if (numThree > 0) {
        three = true;
    }
    if (one) {
        if (!two && !three) {
            console.log('Positive')
        }
    } else if (two) {
        if (!one && !three) {
            console.log('Positive')
        }
    } else if (three) {
        if (!one && !two) {
            console.log('Positive')
        }
    }
    
    if (!one && !two && !three) {
        console.log('Negative')
    }
    if (one && two && three) {
        console.log('Positive')
    }
    if (one && two && !three) {
        console.log('Negative')
    }
    if (one && !two && three) {
        console.log('Negative')
    }
    if (!one && two && three) {
        console.log('Negative')
    }
}
signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, 2, -3)
signCheck(-5, 1, 1)