import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "./database.config";

export const databaseProviders = [{
        provide: "sequelize",
        useFactory: async () => {
            const sequelize = new Sequelize(databaseConfig.development);
            sequelize.addModels([]);
            // await sequelize.sync() // Avoid overwriting
            return sequelize;
        }
}]

// define: {
//     freezeTableName: true, // Avoid table name pluralizing
//     createdAt: false,
//     updatedAt: false,
// }