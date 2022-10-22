import { Sequelize } from "sequelize-typescript";
import { Category } from "src/category/category.entity";
import { Product } from "src/product/product.entity";
import { databaseConfig } from "./database.config";

export const databaseProviders = [{
        provide: "sequelize",
        useFactory: async () => {
            const sequelize = new Sequelize({
                ...databaseConfig.development,
                define: {
                    freezeTableName: true,
                    createdAt: false, 
                    updatedAt: false,
                }
            });
            sequelize.addModels([
                Category,
                Product,
            ]);
            // await sequelize.sync() // Avoid overwriting
            return sequelize;
        }
}]

// define: {
//     freezeTableName: true, // Avoid table name pluralizing
//     createdAt: false,
//     updatedAt: false,
// }