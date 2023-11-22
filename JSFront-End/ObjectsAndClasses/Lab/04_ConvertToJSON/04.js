function convertToJSON(name, lastName, hairColor) {
    person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }
    person = JSON.stringify(person);
    console.log(person);
}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');