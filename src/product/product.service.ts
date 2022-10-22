import { Inject, Injectable } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@Inject(PRODUCT_REPOSITORY) private readonly productRep : typeof Product){}

    async findAll(){
        return await this.productRep.findAll();
    }

}
