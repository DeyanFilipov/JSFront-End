function towns(array) {
    let cities = {};
    for (city of array) {
        let town = city.split(' | ');
        let obj = {
            town: town[0],
            latitude: (parseFloat(town[1])).toFixed(2),
            longitude: (parseFloat(town[2])).toFixed(2)
        }
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);