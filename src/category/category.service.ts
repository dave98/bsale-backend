import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CATEGORY_REPOSITORY } from 'src/core/constants';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(@Inject(CATEGORY_REPOSITORY) private readonly  categoryRep : typeof Category){}

    async  findAll(){
        return await this.categoryRep.findAll();
    }

    async findById(categoryId : number){
        return await this.categoryRep.findOne({
            where: {
                id: categoryId,
            }
        }).then((tCategory) => {
            if(tCategory){
                return tCategory;
            }else{
                throw new NotFoundException("This category doesn't exists");
            }
        })
    }
}
