export class MyDate {
    /* Other way */
    constructor(
        private year: number,
        private month: number,
        private date: number
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
            this.month += amount
        }
        if (type === 'date') {
            this.date += amount
        }
    }

    printFormat() {
        const date = this.addPadding(this.date)
        const month = this.addPadding(this.month)
        const year = this.addPadding(this.year)
        return `${date}/${month}/${year}`
    }

    /* Getter */
    getDate() {
        return this.date
    }

    getMonth() {
        return this.month
    }

    /* Setter */
    setDate(date: number) {
        this.date = date
    }
}

const myDate = new MyDate(1998,  10, 2)

console.log(myDate.printFormat())

console.log(myDate.getDate())

myDate.setDate(3)

console.log(myDate.printFormat())
