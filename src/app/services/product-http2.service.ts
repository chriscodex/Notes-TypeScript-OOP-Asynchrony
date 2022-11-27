import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";


/* Extend with type */
export class ProductHttpService extends BaseHttpService<Product> {
    otroRequest() {
        //code
        this.url
    }
}
