import axios from "axios";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { productService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements productService{
    private url = 'https://api.escuelajs.co/api/v1/products'

    async create(dto: CreateProductDto) {
        const { data } = await axios.post(this.url, dto)
        return data
    }

    async update(id: number, changes: UpdateProductDto) {
        const { data } = await axios.put(`${this.url}/${id}`, changes)
        return data
    }

    async findOne(id: number) {
        const { data } = await axios.get(`${this.url}/${id}`)
        return data
    }

    async getAll() {
        const { data } = await axios.get<Product[]>(this.url)
        return data
    }

}
