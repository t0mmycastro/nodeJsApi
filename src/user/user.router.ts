import { UserController } from "./controllers/user.controller";
import { BaseRouter } from "../shared/router/router";

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    // El constructor cuando se extiende de otra clase y trae metodos o cosas ya inicializadas de la otra clase, estos se declaran con el super y este necesita tener algo por dentro. El super basicamente trae todos los metodos
    super(UserController);
  }

  routes(): void {
    // Como esto ya esta declarado en el router.ts, podemos escribir codigo aca que se va a ejectutar de igual manera en el router.ts

    // ACÁ VAN LAS RUTAS
    this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
    this.router.get("/user/:id", (req, res) =>
      this.controller.getUsersById(req, res)
    );
    this.router.post("/createUser", (req, res) =>
      this.controller.createUser(req, res)
    );
    this.router.put("/updateUser/:id", (req, res) =>
      this.controller.updateUser(req, res)
    );
    this.router.delete("/deleteUser/:id", (req, res) =>
      this.controller.deleteUser(req, res)
    );
  }
}
