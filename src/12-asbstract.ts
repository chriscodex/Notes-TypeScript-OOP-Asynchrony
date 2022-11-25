/* Una clase abstracta no puede ser instanciado, pero sus hijos pueden tener sus comportamientos */

export abstract class Animal {
    constructor(public name: string){}

    greeting() {
        console.log(`I'm ${this.name}`)
    }

    move() {
        console.log('Moving along')
    }
}

class Dog extends Animal {
    constructor(name: string, public owner: string){
        super(name)
    }

    move() {
        console.log('moving as dog')
        super.move()
    }
}

//const animal = new Animal('Sasy')

const rock = new Dog('Rock', 'Christian')
rock.greeting()
rock.move()
