import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService : ProductService){}

    @Get()
    async findWithFilters(
        @Query("name") name : string,
        @Query("minprice") minprice : number,
        @Query("maxprice") maxprice : number,
        @Query("category") category : number,
    ){
        return await this.productService.findWithFilters(name, minprice, maxprice, category);
    }

    @Get(":productId")
    async findOne(
        @Param("productId") productId : number
    ){
        return await this.productService.findById(productId);
    }

}
