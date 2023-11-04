function solve(startingYield) {
    let totalSpice = 0;
    let days = 0;
    const dailyConsumption = 26;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        totalSpice-= dailyConsumption;
        startingYield -= 10;
        days++;
    }

    if (totalSpice >= dailyConsumption) {
        totalSpice -= dailyConsumption;
    }

    console.log(days);
    console.log(totalSpice);
}
solve(111);