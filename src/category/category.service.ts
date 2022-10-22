import { Inject, Injectable } from '@nestjs/common';
import { CATEGORY_REPOSITORY } from 'src/core/constants';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(@Inject(CATEGORY_REPOSITORY) private readonly  categoryRep : typeof Category){}

    async  findAll(){
        return await this.categoryRep.findAll();
    }
}
