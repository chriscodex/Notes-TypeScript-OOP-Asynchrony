class Person {
    private name: string = ''

    greeting<typeMethod>(input: typeMethod) {
        return input
    }
}

const p1 = new Person()

console.log(p1.greeting<string>('Hello'))
