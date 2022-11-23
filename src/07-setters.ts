export class MyDate {
    constructor(
        private year: number = 2000,
        private _month: number = 1,
        private _date: number = 1
    ) {}

    private addPadding(value: number): string {
        if (value < 10) {
            return `0${value}`
        } else {
            return `${value}`
        }
    }

    add(amount: number, type: 'year' | 'month' | 'date') {
        if (type === 'year') {
            this.year += amount
        }
        if (type === 'month') {
            this._month += amount
        }
        if (type === 'date') {
            this._date += amount
        }
    }

    printFormat() {
        const date = this.addPadding(this._date)
        const month = this.addPadding(this._month)
        const year = this.addPadding(this.year)
        return `${date}/${month}/${year}`
    }

    /* Getter */
    // Getter can't be void
    get date() {
        // Code
        return this._date
    }

    /* Extender una propiedad */
    get isLeapYear() {
        if (this.year % 400 === 0) return true
        if (this.year % 100 === 0) return false
        return this.year % 4 === 0
    }

    /* Setter */
    set month(value: number) {
        if (value >= 1 && value <= 12) {
            this._month = value
        } else {
            throw new Error('month out of range')
        }
    }
}

const myDate = new MyDate(1998,  10, 2)

console.log(myDate.printFormat())

console.log(myDate.date)

console.log(myDate.isLeapYear)

// No existe el mes 50, por lo que debería ser rechazado
myDate.month = 50

console.log(myDate.printFormat())
