export class Animal {
    /* the scope of a protected property is in the own class and their doughters classes */
    constructor(protected name: string){}

    move() {
        console.log('Moving along')
    }

    greeting() {
        console.log(`Hello, I'm ${this.name}`)
    }

    doSomething() {
        console.log('doo')
    }
}

class Dog extends Animal {
    constructor(
        name: string,
        public owner: string
    ) {
        super(name)
    }

    woof(times: number) {
        for (let index = 0; index < times; index++) {
            console.log('woof')
        }
        /* We can use father class methods using the keyword 'super' */
        super.doSomething()
    }

    /* Polimorfism */
    doSomething(): void {
        console.log('dog is doing something')
        super.doSomething()
    }
}

const rocky = new Animal('rocky')

rocky.move()
rocky.greeting()

const lazy = new Dog('Lazy','Christian')

lazy.woof(1)
console.log(lazy.owner)
lazy.doSomething()
