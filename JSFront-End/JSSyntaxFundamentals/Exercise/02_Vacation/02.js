function solve(sizeOfGroup, typeOfGroup, dayOfTheWeek) {
    const prices = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.80,
            'Sunday': 10.46
        },
        'Business': {
            'Friday': 10.90,
            'Saturday': 15.60,
            'Sunday': 16
        },
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.50
        }
    };

    let pricePerPerson = prices[typeOfGroup][dayOfTheWeek];
    let total = pricePerPerson * sizeOfGroup;

    if (typeOfGroup === 'Students' && sizeOfGroup >= 30) {
        total *= 0.85;
    } else if (typeOfGroup === 'Business' && sizeOfGroup >= 100) {
        total -= 10 * pricePerPerson;
    } else if (typeOfGroup === 'Regular' && sizeOfGroup >= 10 && sizeOfGroup <= 20) {
        total *= 0.95;
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}

solve(40, 'Regular', 'Saturday')