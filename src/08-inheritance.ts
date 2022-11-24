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
    woof(times: number) {
        for (let index = 0; index < times; index++) {
            console.log('woof')
        }
    }
}

const rocky = new Animal('rocky')

rocky.move()
rocky.greeting()
