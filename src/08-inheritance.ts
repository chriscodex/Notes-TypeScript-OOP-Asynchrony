export class Animal {
    constructor(public name: string){}

    move() {
        console.log('Moving along')
    }

    greeting() {
        console.log(`Hello, I'm ${this.name}`)
    }

}

/* Inheritance from Animal class */

class Dog extends Animal {

}

const rocky = new Animal('rocky')

rocky.move()
rocky.greeting()
