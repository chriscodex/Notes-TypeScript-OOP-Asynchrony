import axios from 'axios'
import { Product } from './models/product.model'

(async ()=>{
    /* Tipado desde el retorno:
    async function getProduct(): Product[]
    */
    async function getProducts() {
        /* Tipado desde la librería
        Con la expresión Product[] se ha tipado la promesa tanto desde dentro como fuera */
        const promise = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')

        /* Tipado desde el cast
        En caso la librería no soporte esta expresión, se puede usar:
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
        const data = rta.data as Product[]
        return data
        */

        return promise.data
    }

    console.log('---'.repeat(10))
    const products = await getProducts()
    console.log(products)
})()
