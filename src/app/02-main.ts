import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService()

/* Create */
productService.create({
    title: 'Product 1',
    price: 100,
    description: 'description of product 1',
    categoryId: 12,
    images: []
})


const products = productService.getAll()

const productId = products[0].id

console.log(products)

/* Update */

productService.update(productId, {
    title: 'Other title'
})

const rta = productService.findOne(productId)
console.log(rta)
