import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./user/user.router";
import { ConfigServer } from "./config/config";
import { DataSource } from "typeorm";

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv("PORT");

  constructor() {
    super(); // traemos las inicializaciones de configserver

    // inicializamos variables y métodos`, todo lo mas importante va acá
    this.app.use(express.json()); // analiza el cuerpo de una solicitud http entrante como JSON
    this.app.use(express.urlencoded({ extended: true })); // hace la funcion de bodyParser
    this.app.use(morgan("dev")); // loggear las peticiones
    this.app.use(cors()); // evitar politica de cors
    this.dbConnect();

    //rutas
    this.app.use("/api", this.routers());

    this.listen(); // inicializamos el listen
  }

  routers(): Array<express.Router> {
    return [new UserRouter().router]; // Aca iremos poniendo todas las rutas que necesitemos.
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => console.log("Connect Success!"))
      .catch((error) => console.log("Error"));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor activo en el puerto " + this.port);
    });
  }
}

new ServerBootstrap();
