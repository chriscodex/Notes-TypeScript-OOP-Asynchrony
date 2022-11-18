export class MyDate {
    year: number
    month: number
    date: number

    constructor(year: number, month: number, date: number) {
        this.year = year
        this.month = month
        this.date = date
    }

    printFormat() {
        return `${this.date}/${this.month}/${this.year}`
    }
}

const myDate = new MyDate(1998,10,2)
const formated = myDate.printFormat()
console.log(formated)
