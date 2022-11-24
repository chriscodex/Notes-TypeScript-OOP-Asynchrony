export class Animal {
    constructor(public name: string){}

    move() {
        console.log('Moving along')
    }

    greeting() {
        console.log(`Hello, I'm ${this.name}`)
    }

}

const rocky = new Animal('rocky')

rocky.move()
rocky.greeting()
