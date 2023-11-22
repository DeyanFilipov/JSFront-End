function carWash(commands) {
    let value = 0;

    for (el of commands) {
        if (el === 'soap') {
            value += 10;
        } else if (el === 'water') {
            value = value + (value * 0.2);
        } else if (el === 'vacuum cleaner') {
            value = value + (value * 0.25);
        } else if (el == 'mud') {
            value = value - (value * 0.1);
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);