import  {Table, Model, Column} from "sequelize-typescript";

@Table({
    tableName: "category"
})
export class Category extends Model<Category>{
    @Column
    name : string;
}