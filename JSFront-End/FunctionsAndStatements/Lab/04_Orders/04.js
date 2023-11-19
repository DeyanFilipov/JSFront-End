function orders(text, quantity) {
    let totalPrice = 0;
    const coffee = 1.50;
    const water = 1.00;
    const coke = 1.40;
    const snacks = 2.00;

    if (text === 'coffee') {
        totalPrice = coffee * quantity;
    } else if (text === 'water') {
        totalPrice = water * quantity;
    }  else if (text === 'coke') {
        totalPrice = coke * quantity;
    } else if (text === 'snacks') {
        totalPrice = snacks * quantity;
    }
    console.log(`${totalPrice.toFixed(2)}`);
}
orders('coffee', 2)
orders('water', 5)