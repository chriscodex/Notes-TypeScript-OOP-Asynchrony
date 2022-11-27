/* Los decoradores tienen un uso similar como en Python, estas agregan funcionalidades
o comportamientos extra de manera sencilla. */
// Los decoradores avisan de la falla al momento del runtime

// Para este ejemplo, usaremos la librería de class-validator
import { IsEmail, validateOrReject, IsNotEmpty } from 'class-validator'

class UserClass {
    @IsNotEmpty()
    name!: string

    // Validará que el string tenga el formato de un email
    @IsEmail()
    email!: string
}

(async ()=>{
    try {
        const uc1 = new UserClass()
        uc1.email = 'asdf'
        uc1.name = ''
        await validateOrReject(uc1)
    } catch (error) {
        console.log(error)
    }
})()


