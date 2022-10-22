import { Dialect } from "sequelize";

export interface IDatabaseConfigAttr {
    dialect? : Dialect;
    host? : string;
    port? : number;
    username? : string;
    password? : string;
    database? : string; 
}

export interface IDatabaseConfig {
    development : IDatabaseConfigAttr;
    // production : DatabaseConfigAttr; // For future forks
}