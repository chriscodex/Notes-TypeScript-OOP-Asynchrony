console.log(Math.PI)
console.log(Math.max(1,2,3,4,21))

/* Static methods and properties */
// We can simulate like math library

class MyMath {
    // Static property and read only
    static readonly PI: number = 3.14

    static max(...numbers: number[]) {
        return numbers.reduce((max, item) => max >= item ? max: item)
    }
}

console.log(MyMath.PI)
console.log(MyMath.max(1,2,3))

const numbers = [122,34,56]
console.log(MyMath.max(...numbers))

