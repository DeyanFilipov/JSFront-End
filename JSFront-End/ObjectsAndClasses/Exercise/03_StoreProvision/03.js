function storeProvision(currentStock, orderedProducts) {
    let current = {};
    for (i = 0; i < currentStock.length; i++) {
        if (i % 2 === 0) {
            current[currentStock[i]] = parseInt(currentStock[i + 1]);
        }
    }
    for (i = 0; i < orderedProducts.length; i++) {
        let product;
        let isCurrent = false;
        if (i % 2 === 0) {
            product = orderedProducts[i];

            for (el in current) {
                if (el === product) {
                    let num = parseInt(orderedProducts[i + 1]);
                    current[el] += num;
                    isCurrent = true;
                    break;
                }
            }
            if (!isCurrent) {
                current[orderedProducts[i]] = parseInt(orderedProducts[i + 1]);
            }
        }
    }
    for (key in current) {
        console.log(`${key} -> ${current[key]}`);
    }
}
storeProvision([ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ], [ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]);
storeProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])