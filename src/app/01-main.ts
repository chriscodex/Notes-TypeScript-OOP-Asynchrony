import axios from 'axios'

(async ()=>{
    async function getProducts() {
        const promise = await axios.get('https://api.escuelajs.co/api/v1/products')
        return promise.data
    }

    console.log('---'.repeat(10))
    const products = await getProducts()
    console.log(products)
})()
