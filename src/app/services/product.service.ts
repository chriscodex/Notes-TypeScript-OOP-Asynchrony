import { faker } from '@faker-js/faker'
import { Product} from './../models/product.model'
import { CreateProductDto, UpdateProductDto } from './../dtos/product.dto'

export const products: Product[] = []

export const addProduct = (data: CreateProductDto):Product => {
    const newProduct = {
        ...data,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        }
    }
    products.push(newProduct)
    return newProduct
}

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
    const index = products.findIndex(item => item.id === id)
    const prevData = products[index]

    // Update
    products[index] = {
        ...prevData,
        ...changes
    }
    return products[index]
}

// ReadonlyArray Case
export const findProducts = (dto: FindProduct) : Product[] => {
    // Code
    return products
}
