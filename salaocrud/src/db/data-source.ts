import "reflect-metadata";
import { DataSource } from "typeorm";
import { config, dialect } from "../config/db.config"; // Corrigido o caminho
import { Servico } from "../model/servico"; // Importa a entidade Servico

export const AppDataSource = new DataSource({
    type: dialect,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    entities: [Servico], // Usa a entidade Servico
    synchronize: false,
    logging: false,
});