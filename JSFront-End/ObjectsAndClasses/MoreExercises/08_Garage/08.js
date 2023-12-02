function storeCarsInGarages(infoArray) {
    function formatCarInfo(carInfo) {
        return carInfo.map(info => {
            const [key, value] = info.split(': ');
            return `${key} - ${value}`;
        }).join(', ');
    }
    let garageMap = {};

    for (let info of infoArray) {
        let [garageNumber, carInfo] = info.split(' - ');
        carInfo = carInfo.split(', ');

        if (garageMap[garageNumber]) {
            garageMap[garageNumber].car.push(formatCarInfo(carInfo));
        } else {
            garageMap[garageNumber] = {
                number: garageNumber,
                car: [formatCarInfo(carInfo)]
            };
        }
    }

    let garages = Object.values(garageMap);

    for (let garage of garages) {
        console.log(`Garage № ${garage.number}`);
        for (let car of garage.car) {
            console.log(`--- ${car}`);
        }
    }
}
storeCarsInGarages(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
storeCarsInGarages(['1 - color: green, fuel type: petrol', '1 - color: dark red, manufacture: WV', '2 - fuel type: diesel', '3 - color: dark blue, fuel type: petrol']);