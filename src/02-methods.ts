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

    add(amount: number, type: 'days' | 'month' | 'years') {
        if (type === 'days') {
            this.date += amount
        }
        if (type === 'month') {
            this.month += amount
        }
        if (type === 'years') {
            this.year += amount
        }
    }
}

const myDate = new MyDate(1998,10,2)
console.log(myDate.printFormat())
