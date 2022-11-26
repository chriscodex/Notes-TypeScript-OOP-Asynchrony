import axios from 'axios'
import { Product } from './models/product.model'

(async ()=>{
    async function getProducts() {
        const promise = await axios.get<string[]>('https://api.escuelajs.co/api/v1/products')
        return promise.data
    }

    console.log('---'.repeat(10))
    const products = await getProducts()
    console.log(products)
})()
