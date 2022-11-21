export class MyDate {
    date: number
    month: number
    year: number

    constructor(year: number, month: number, date: number) {
        this.year = year
        this.month = month
        this.date = date
    }

    addPadding(value: number) {
        if (value < 10) {
            return `0${value}`
        } else {
            return `${value}`
        }
    }
}
