import { Controller, Get, HttpStatus, NotFoundException, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService : CategoryService){}

    @Get()
    async findAll(){
        return await this.categoryService.findAll();
    }

    @Get(":categoryId")
    async findOne(
        @Param("categoryId") categoryId : number
    ){
        return await this.categoryService.findById(categoryId)
    }
}
