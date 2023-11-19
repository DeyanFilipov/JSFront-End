function loadingBar(num) {
    let numberOfPercent = num / 10;
    let bar = [];

    for (let i = 1; i <= numberOfPercent; i++) {
        bar.push('%');
    }
    while (bar.length < 10) {
        bar.push('.');
    }
    if (num !== 100) {
        console.log(`${num}% [${bar.join('')}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!')
    }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)