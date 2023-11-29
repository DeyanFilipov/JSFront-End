function employees(array) {
    let people = {};
    for (element of array) {
        people[element] = element.length;
    }
    for (person in people) {
        console.log(`Name: ${person} -- Personal Number: ${people[person]}`);
    }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland'])