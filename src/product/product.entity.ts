import { Table, Model, Column, BelongsTo, ForeignKey } from "sequelize-typescript"
import { Category } from "src/category/category.entity";

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