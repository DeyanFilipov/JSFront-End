function radioCrystals(arr) {
    function proccess(desiredValue, crystalValue) {
        let operations = {
            Cut: x => x / 4,
            Lap: x => x * 0.8,
            Grind: x => x - 20,
            Etch: x => x - 2,
            Xray: x => x + 1,
            Transportingandwasging: x => Math.floor(x)
        }
        const operationsArr = ['Cut', 'Lap', 'Grind', 'Etch'];
        console.log(`Processing chunk ${crystalValue} microns`);
        while (crystalValue >= desiredValue - 1) {
            if (crystalValue + 1 === desiredValue) {
                crystalValue = operations['Xray'](crystalValue);
                console.log('X-ray x1');
                break;
            }
            let times = 0;
            let currentOperation = operationsArr.shift();
            let cleanOperatarion = currentOperation.replace('-', '').replace(/\s+/g, '');
            while (operations[cleanOperatarion](crystalValue) >= desiredValue - 1) {
                crystalValue = operations[cleanOperatarion](crystalValue);
                times++;
            }
            if (times === 0) {
                continue;
            }
            console.log(`${currentOperation} x${times}`);
            crystalValue = operations['Transportingandwasging'](crystalValue);
            console.log('Transporting and washing');
            if (crystalValue === desiredValue) {
                break;
            }
        }
    }
    let [desiredValue, ...crystals] = arr;
    for (const crystal of crystals) {
        proccess(desiredValue, crystal);
        console.log(`Finished crystal ${desiredValue} microns`);
    }
}
radioCrystals([1375, 50000])
radioCrystals([1000, 4000, 8100])