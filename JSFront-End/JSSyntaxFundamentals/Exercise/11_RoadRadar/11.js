function solve(driverSpeed, area) {
    let limit;
    let speed = parseInt(driverSpeed)
    let status
    if(area==='motorway') {
        limit = 130;
        let difference = 0;
        if(speed > limit) {
            difference = speed - limit;
            if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if(difference>20 && difference<=40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        }
    } else if(area==='interstate') {
        limit = 90;
        if(speed > limit) {
            difference = speed - limit;
            if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if(difference>20 && difference<=40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        }
    } else if(area==='city') {
        limit = 50;
        if(speed > limit) {
            difference = speed - limit;
            if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if(difference>20 && difference<=40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        }
    } else if(area==='residential') {
        limit = 20;
        if(speed > limit) {
            difference = speed - limit;
            if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if(difference>20 && difference<=40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        }
    }
}
solve(120, 'interstate')