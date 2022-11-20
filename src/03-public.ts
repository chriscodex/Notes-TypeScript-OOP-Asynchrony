export class MyDate {
    /* By default properties are public */
    public date: number
    month: number
    year: number

    constructor(year: number, month: number, date: number) {
        this.date = date
        this.month = month
        this.year = year
    }

    /* By default methods are public */
    public add(amount: number, type: 'year' | 'month' | 'date') {
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
}

const myDate = new MyDate(1998,10,2)


