function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetRepairs = Math.floor(lostFights / 2);
    let swordRepairs = Math.floor(lostFights / 3);
    let shieldRepairs = 0; 
    let armorRepairs = 0;

    for (let i = 1; i <= lostFights; i++) {
        let isHelmetBroken = i % 2 === 0;
        let isSwordBroken = i % 3 === 0;
        
        if (isHelmetBroken && isSwordBroken) {
            shieldRepairs++;
        }

        if (shieldRepairs % 2 === 0 && shieldRepairs !== 0 && i % 6 === 0) {
            armorRepairs++;
        }
    }

    let totalExpenses = helmetRepairs * helmetPrice + swordRepairs * swordPrice + shieldRepairs * shieldPrice + armorRepairs * armorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5)