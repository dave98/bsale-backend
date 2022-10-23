import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@Inject(PRODUCT_REPOSITORY) private readonly productRep : typeof Product){}
    
    async findWithFilters(
        name : string | null, 
        minprice : number | null, 
        maxprice : number | null, 
        category : number | null
    ){
        return await this.productRep.scope( // Using scopes to optimize query structure during object creation. See on Entity
            [{method: ["filterName", name]},  
            {method: ["filterPrice", minprice, maxprice]},
            {method: ["filterCategory", category]}, 
            "withCategory"])
            .findAll()
    }

    async findById(productId : number){
        return await this.productRep.scope("withCategory").findOne({
            where: {
                id: productId,
            }
        }).then((tProduct) => {
            if(tProduct){
                return tProduct;
            }else{
                throw new NotFoundException("This product doesn't exists.")
            }
        })
    }

}
