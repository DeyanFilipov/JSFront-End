function armies(info) {
    let armiesInfo = [];
    for (command of info) {
        if (command.includes('arrives')) {
            let leader = command.split(' ');
            leader.pop();
            leader = leader.join(' ');
            armiesInfo.push({
                leader: leader,
                army: []
            });
        } else if (command.includes('defeated')) {
            let leader = command.split(' ');
            leader.pop();
            leader = leader.join(' ');
            const index = armiesInfo.findIndex(obj => obj.leader === leader);
            if (index !== -1) {
                armiesInfo.splice(index, 1);
            } 
        } else if (command.includes(':')) {
            const [leader, restOfString] = command.split(": ");
            const [armyName, armyCount] = restOfString.split(", ");
            const armyCountNumber = parseInt(armyCount, 10);
            const index = armiesInfo.findIndex(obj => obj.leader === leader);
            if (index !== -1) {
                armiesInfo[index].army.push([armyName, armyCountNumber]);
            }
        } else if (command.includes('+')) {
            let armyName = command.split(' + ')[0];
            let armyCount = command.split(' + ')[1];
            armyCount = parseInt(armyCount, 10);
            const index = armiesInfo.findIndex(obj => obj.army.some(entry => entry[0] === armyName));
            if (index !== -1) {
                const armyIndex = armiesInfo[index].army.findIndex(entry => entry[0] === armyName);
                if (armyIndex !== -1) {
                    armiesInfo[index].army[armyIndex][1] += armyCount;
                }
            }
        }
    }

    armiesInfo.sort((a, b) => {
        const totalArmyA = a.army.reduce((sum, [, count]) => sum + count, 0);
        const totalArmyB = b.army.reduce((sum, [, count]) => sum + count, 0);
        return totalArmyB - totalArmyA;
    });

    armiesInfo.forEach(leader => {
        let leaderOutput = `${leader.leader}: ${leader.army.reduce((sum, [, count]) => sum + count, 0)}`;
        console.log(leaderOutput);
        leader.army.sort((a, b) => b[1] - a[1]);
        leader.army.forEach(([armyName, armyCount]) => {
            console.log(`>>> ${armyName} - ${armyCount}`);
        });
    });
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);