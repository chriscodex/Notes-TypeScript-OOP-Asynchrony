import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model"
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService <TypeClass> {

    constructor(
        protected url: string
    ){}

    async getAll(){
        const { data } = await axios.get<TypeClass[]>(this.url)
        return data
    }

    async update<ID, DTO>(id: ID, changes: DTO) {
        const { data } = await axios.put(`${this.url}/${id}`, changes)
        return data
    }
}


(async ()=>{
    const url1 = 'https://api.escuelajs.co/api/v1/products'
    const productService = new BaseHttpService<Product>(url1)

    const rta = await productService.getAll()
    console.log(rta.length)

    const url2 = 'https://api.escuelajs.co/api/v1/categories'
    const productService2 = new BaseHttpService<Category>(url2)

    const rta2 = await productService2.getAll()
    console.log(rta2.length)

    /* Using generics */
    productService.update<Product['id'], UpdateProductDto>(1, {
        title: 'title neww',
    })
})()
