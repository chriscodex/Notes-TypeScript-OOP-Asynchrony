/* Los genéricos son tipos de datos que son "enviados" como parámetros */
import { Dog } from "./08-inheritance"
    /* Convertionaly if we use generics, we use the letter 'T' or:
    E - Element
    K - Key
    N - Number
    V - Value
    */

    // Example 1
    function getValue<myType>(value: myType) {
        return value
    }

    getValue<string>('hello')

    // Example 2
    function getValue2<T,N>(message: T, value: N) {
        return value
    }

    getValue2<string, number>('hello',12)

    // Example 3
    const fifi = new Dog('Fifi', 'Christian')
    getValue<Dog>(fifi)

// function getValue(value: number | string) {
//     return value
// }

// getValue(12)
// getValue('')
