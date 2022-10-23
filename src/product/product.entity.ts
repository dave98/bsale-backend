import { Op, where } from "sequelize";
import { Table, Model, Column, BelongsTo, ForeignKey, Scopes } from "sequelize-typescript"
import { Category } from "src/category/category.entity";

@Scopes(() => ({
    filterName: (function(name){
        return name ? {
            where: {
                name: {
                    [Op.substring]: name
                }
            }
        } : {}
    }),

    filterPrice: (function(minprice, maxprice){
        if(minprice && maxprice){
            return {
                where: {
                    price: {[Op.between]: [minprice, maxprice]} 
                }
            }
        }else if(minprice){
            return {
                where: {
                    price: {[Op.gte]: minprice}
                }
            }
        }else if(maxprice){
            return {
                where: {
                    price: {[Op.lte]: maxprice}
                }
            }
        }else{return {}}
    }),

    filterCategory: (function(category) {
        return category ? {
            where: {
                category,
            }
        } : {}
    }),

    withCategory: {
        attributes: {
            exclude: ["categoryId"]
        },
        include: [{
            model: Category,
            attributes: ["id"],
        }]
    },
}))
@Table({
    tableName: "product"
})
export class Product extends Model<Product>{
    @BelongsTo(() => Category)
    category : Category

    @ForeignKey(() =>  Category)
    @Column({
        field: "category"
    })
    categoryId : number

    @Column
    name : string;

    @Column({
        field: "url_image"
    })
    urlImage : string;

    @Column
    price : number;

    @Column
    discount : number;
}