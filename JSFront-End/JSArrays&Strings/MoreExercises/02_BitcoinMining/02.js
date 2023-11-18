function bitcoinMining (numbers) {
    const bitcoin = 11949.16;
    const oneGramOfGold = 67.51;
    let totalAmountOfMoney = 0;
    let totalAmountOfBitcoin = 0;
    let day= 0;
    let firstDayBitcoinIsBought = 999;

    for (let i = 0; i < numbers.length; i++) {
        day += 1;
        if (day % 3 === 0) {
            totalAmountOfMoney += ((numbers[i] - (numbers[i] * 0.3)) * oneGramOfGold);
        } else {
            totalAmountOfMoney += (numbers[i] * oneGramOfGold);
        }
        if (totalAmountOfMoney >= bitcoin) {
            if (firstDayBitcoinIsBought === 999) {
                firstDayBitcoinIsBought = day;
            }
            while (totalAmountOfMoney >= bitcoin) {
                totalAmountOfBitcoin += 1;
                totalAmountOfMoney -= bitcoin;
            }
        }

    }

    console.log(`Bought bitcoins: ${totalAmountOfBitcoin}`);
    if ( firstDayBitcoinIsBought !== 999) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBitcoinIsBought}`);
    }
    console.log(`Left money: ${totalAmountOfMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);