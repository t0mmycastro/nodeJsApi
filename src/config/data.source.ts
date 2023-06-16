import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import * as dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV !== undefined ? `.${process.env.NODE_ENV.trimEnd()}.env` : '.env' // con esto nos reconoce el archivo .env
})

const Config : DataSourceOptions = {
    type: "mysql",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // Aca vamos a configurar la lectura de entidades, vam
      entities: [__dirname + "/../**/*.entity{.ts,.js}"], // con esto queremos decir, que nos lea todas las carpetas y de todas esas carpetas que leas cualquier archivo que tenga .entity{ts,js} que lea ts o js
      migrations: [__dirname + "/../../migrations/*{.ts,.js}"], // que lea todos los archivos de migrations que tengan la extension ts o js
      synchronize: false,
      migrationsRun: true,
      logging: false,
      namingStrategy: new SnakeNamingStrategy(),
}

export const AppDatSource: DataSource = new DataSource(Config);