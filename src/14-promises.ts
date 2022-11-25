import axios from 'axios'

(async ()=>{

    function delay(time: number) {
        /* This promise return a string */
        const promise = new Promise<string>((resolve)=>{
            setTimeout(()=>{
                resolve('Hello friends')
            })
        })
        return promise
    }

    function getProducts() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products')
        return promise
    }

    async function getProductsAsync() {
        const promise = await axios.get('https://api.escuelajs.co/api/v1/products')
        return promise.data
    }

    console.log('---'.repeat(10))
    const rta = await delay(2000)
    console.log(rta)

    console.log('---'.repeat(10))
    const products = await getProducts()
    console.log(products.data)

    console.log('---'.repeat(10))
    const productsV2 = await getProductsAsync()
    console.log(productsV2)

})()
