import * as dotenv from "dotenv";
import { Dialect } from "sequelize";
import { IDatabaseConfig } from "./interfaces/dbConfig.interface";

dotenv.config();
export const databaseConfig : IDatabaseConfig = {
    development: {
        dialect: process.env.DB_DIALECT as Dialect,
        host: process.env.DB_HOST,
        port:  parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    }
}