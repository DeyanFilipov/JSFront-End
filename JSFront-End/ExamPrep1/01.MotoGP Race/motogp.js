function motoGPRace(input) {

    const riderCount = Number(input.shift());
    const riders = {};

    for (let index = 0; index < riderCount; index++) {
        const currentRider = input.shift();
        const currentRiderSplit = currentRider.split('|');
        const riderName = currentRiderSplit[0];
        const riderFuel = currentRiderSplit[1];
        const riderPosition = currentRiderSplit[2];

        riders[riderName] = {riderFuel, riderPosition};
    };
    
    let command = input.shift();
    while(command !== 'Finish') {
        const commandSplit = command.split(' - ');
        const action = commandSplit[0];

        switch(action) {
            case 'StopForFuel':
                let rider = commandSplit[1];
                let minimumFuel = Number(commandSplit[2]);
                let changedPosition = Number(commandSplit[3]);

                if (riders[rider].riderFuel < minimumFuel) {
                    riders[rider].riderPosition = changedPosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
                break;
        
            case "Overtaking":
                let firstRider = commandSplit[1];
                let secondRider = commandSplit[2];
                if (riders[firstRider].riderPosition < riders[secondRider].riderPosition) {
                    const firstRiderPosition = riders[firstRider].riderPosition; 
                    const secondRiderPosition = riders[secondRider].riderPosition;
                    riders[firstRider].riderPosition = secondRiderPosition;
                    riders[secondRider].riderPosition = firstRiderPosition;
                    console.log(`${firstRider} overtook ${secondRider}!`);
                }
                break;

            case "EngineFail":
                let riderToFail = commandSplit[1];
                let lapsLeft = Number(commandSplit[2]);
                delete riders[riderToFail];
                console.log(`${riderToFail} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
        }


        command = input.shift();
    }
    for (const [key, value] of Object.entries(riders)) {
        console.log(key)
        console.log(`  Final position: ${riders[key].riderPosition}`)
    }
}
motoGPRace((["3", "Valentino Rossi|100|1", "Marc Marquez|90|2", "Jorge Lorenzo|80|3", "StopForFuel - Valentino Rossi - 50 - 1", "Overtaking - Marc Marquez - Jorge Lorenzo", "EngineFail - Marc Marquez - 10", "Finish"]));
motoGPRace((["4", "Valentino Rossi|100|1", "Marc Marquez|90|3", "Jorge Lorenzo|80|4", "Johann Zarco|80|2", "StopForFuel - Johann Zarco - 90 - 5", "Overtaking - Marc Marquez - Jorge Lorenzo", "EngineFail - Marc Marquez - 10", "Finish"]));