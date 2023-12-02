function flightSchedule(arrayOfArrays) {
    let allFlights = arrayOfArrays[0];
    let objOfFlight = [];
    for (el of allFlights) {
        let parts = el.split(' ');
        let numberOfFlight = parts[0];
        let destination = parts.slice(1).join(' ');
        objOfFlight.push(
            {
                numberOfFlight: numberOfFlight,
                destination: destination,
                status: 'Ready to fly'
            }
        )
    }
    let newlyChangedStatuses = arrayOfArrays[1];
    for (let i=0; i<newlyChangedStatuses.length;i++) {
        let numberOfFlight = newlyChangedStatuses[i].split(' ')[0];
        let status = newlyChangedStatuses[i].split(' ')[1];
        for (el of objOfFlight) {
            if (el.numberOfFlight === numberOfFlight) {
                el.status = status
            }
        }
    }

    let flightStatus = arrayOfArrays[2].join('');
    if (flightStatus === 'Cancelled') {
        for (el of objOfFlight) {
            if (el.status === 'Cancelled') {
                console.log(`{ Destination: '${el.destination}', Status: '${el.status}' }`)
            }
        }
    } else if (flightStatus === 'Ready to fly') {
        for (el of objOfFlight) {
            if (el.status === 'Ready to fly') {
                console.log(`{ Destination: '${el.destination}', Status: '${el.status}' }`)
            }
        }
    }
}
flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled'] ]);
flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly'] ])