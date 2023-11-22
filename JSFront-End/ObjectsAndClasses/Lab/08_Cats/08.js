function cats(catStr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    catStr.forEach(catStr => {
        const [name, age] = catStr.split(' ');
        const cat = new Cat(name, age);
        cat.meow();
    });
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);