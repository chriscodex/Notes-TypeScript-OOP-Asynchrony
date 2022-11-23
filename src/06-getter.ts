export class MyDate {
    constructor(
        private year: number = 2000,
        private month: number = 1,
        private date: number = 1
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
}

const myDate = new MyDate(1998,  10, 2)

console.log(myDate.printFormat())

console.log(myDate.getDate())
