/* Class Example */
class Person {
    /* Properties */
    name: string
    lastName: string
    age: number

    /* Constructor */
    constructor(name: string, lastName: string, age: number) {
        this.name = name
        this.lastName = lastName
        this.age = age
    }
}

class MyDate {
    year: number
    month: number
    date: number

    constructor(year: number, month: number, date: number) {
        this.year = year
        this.month = month
        this.date = date
    }
}

/* Object */
const myDate = new MyDate(2020, 3, 13);
console.log(myDate)

const myPerson = new Person('Christian', 'Espinoza', 24)
console.log(myPerson)
