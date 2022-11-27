import { ProductHttpService } from "./services/product-http.service";

(async () => {
    try {
        const productService = new ProductHttpService()

        /* Get all products */
        console.log('---'.repeat(10))
        console.log('Get All')
        const products = await productService.getAll();
        console.log(products.length)
        console.log(products.map(item => item.price))

        /* Update a product */
        console.log('---'.repeat(10))
        console.log('Update')
        const productId = products[0].id
        await productService.update(productId, {
            price: 10000,
            title: 'New title',
            description: 'new description'
        })

        /* Find a product */
        console.log('---'.repeat(10))
        console.log('Find One')
        const product = await productService.findOne(productId)
        console.log(product)
    } catch (error) {
          console.log('Error guys:', error)
    }


})()

