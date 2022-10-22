import  {Table, Model, Column, HasMany} from "sequelize-typescript";
import { Product } from "src/product/product.entity";

@Table({
    tableName: "category"
})
export class Category extends Model<Category>{
    @Column
    name : string;

    @HasMany(() => Product)
    products : Product[];
}