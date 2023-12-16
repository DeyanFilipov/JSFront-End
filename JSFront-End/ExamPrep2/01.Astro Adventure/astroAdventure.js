function solve(input) {
    const astronauts = [];

    let astronautsCount = Number(input.shift());

    for (let index = 0; index < astronautsCount; index++) {
        let astronautSplit = input.shift().split(' ');
        let name = astronautSplit[0];
        let oxygen = Number(astronautSplit[1]);
        let energy = Number(astronautSplit[2]);

        astronauts.push({ name, oxygen, energy });
    }

    for (const iterator of input) {
        let currentCommandLine = iterator.split(' - ');
        let currentCommand = currentCommandLine[0];
        if (currentCommand === 'End') {
            break;
        } else if (currentCommand === 'Explore') {
            let astronautName = currentCommandLine[1];
            let energyNeeded = Number(currentCommandLine[2]);

            const currentAstronaut = astronauts.find(x => x.name === astronautName);

            if (currentAstronaut && currentAstronaut.energy >= energyNeeded) {
                currentAstronaut.energy -= energyNeeded;
                console.log(`${astronautName} has successfully explored a new area and now has ${currentAstronaut.energy} energy!`);
            } else if (currentAstronaut) {
                console.log(`${astronautName} does not have enough energy to explore!`);
            }
        } else if (currentCommand === 'Refuel') {
            let currentName = currentCommandLine[1];
            let currentNameFound = astronauts.find(x => x.name === currentName);
            let amount = Number(currentCommandLine[2]);

            if (currentNameFound) {
                const energeyNeeded = Math.min(200 - currentNameFound.energy, amount); // to calculate how much energy are added, and for the total energy not to exceed 200
                if (currentNameFound.energy + amount > 200) {
                    currentNameFound.energy = 200;
                } else {
                    currentNameFound.energy += amount;
                }

                console.log(`${currentName} refueled their energy by ${energeyNeeded}!`);
            }



        } else if (currentCommand === 'Breathe') {
            let currentName = currentCommandLine[1];
            oxygenRecovered = Number(currentCommandLine[2]);
            let currentNameFound = astronauts.find(x => x.name === currentName);

            if (currentNameFound) {
                const oxygenNeeded = Math.min(100 - currentNameFound.oxygen, oxygenRecovered);
                if (currentNameFound.oxygen + oxygenRecovered > 100) {
                    currentNameFound.oxygen = 100;
                } else {
                    currentNameFound.oxygen += oxygenRecovered;
                }

                console.log(`${currentName} took a breath and recovered ${oxygenNeeded} oxygen!`);
            }
        }
    }

    for (const current of astronauts) {
        console.log(`Astronaut: ${current.name}, Oxygen: ${current.oxygen}, Energy: ${current.energy}`);
    }
}

solve([ '3', 'John 50 120', 'Kate 80 180', 'Rob 70 150', 'Explore - John - 50', 'Refuel - Kate - 30', 'Breathe - Rob - 20', 'End']);
solve([ '4', 'Alice 60 100', 'Bob 40 80', 'Charlie 70 150', 'Dave 80 180', 'Explore - Bob - 60', 'Refuel - Alice - 30', 'Breathe - Charlie - 50', 'Refuel - Dave - 40', 'Explore - Bob - 40', 'Breathe - Charlie - 30', 'Explore - Alice - 40', 'End'])