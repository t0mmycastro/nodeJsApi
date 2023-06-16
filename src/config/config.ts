import * as dotenv from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { AppDatSource } from "./data.source";

export abstract class ConfigServer {
  // Clase abstracta: es una clase que no se puede declarar ni instanciar, solo se pueden inicializar como extension a una clase.
  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv)
    dotenv.config({
        path: nodeNameEnv,
    })
  }

  public getEnviroment(key: string) {
    // lee las variables de entornos y define
    return process.env[key]; // el argumento, el key de la variable va a estar dinamicamente acá
  }

  public getNumberEnv(key: string): number {
    // lee las variables de entorno y define un numero
    return Number(this.getEnviroment(key));
  }

  public get nodeEnv(): string {
    // getter: es una funcion que puede retornar algo o estar vacia, si o si hay que retornar algo.
    return this.getEnviroment("NODE_ENV")?.trim() || ""; // acá queremos leer la variable de entorno global y poder saber en que entorno de trabajo estamos
  }

  public createPathEnv(path: string): string {
    const arrayEnv: Array<string> = ['env']

    if(path.length > 0) {
        const stringToArray = path.split('.') // creamos el array
        arrayEnv.unshift(...stringToArray) // que traiga todos los elementos de stringtoarray, el unshift copia el array nuevo de stringToArray
    }

    return '.' + arrayEnv.join('.')
  }

  get initConnect(): Promise<DataSource> {
    try {
      return AppDatSource.initialize(); // Devuelve la instancia de DataSource conectada
      console.log("🚀 Database Connected");
    } catch (error) {
      console.log(`🚀 Database Connection Error: ${error}`);
      throw error; // Lanza el error para que sea capturado por quien llame a la función
    }
  }

}
